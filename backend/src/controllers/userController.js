const User = require('../models/userModel');

// @desc    Get all Users data
// @route   GET /api/users/
const getUsers = async (_, res) => {
  const users = await User.find({}).populate('photo');
  res.send(users);
};

// @desc    Get  User data
// @route   GET /api/users/:id
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).populate('photo');
  if (user) {
    res.status(200);
    return res.send(user);
  } else {
    res.status(404);
    return res.send({ message: 'User Not Found!' });
  }
};

// @desc    add new user
// @route   POST /api/users
const addUser = async (req, res) => {
  const { first_name, last_name, email, dob, address, gender, photo } =
    req.body;

  if (!first_name || !last_name || !email || !address || !gender || !dob) {
    res.status(400);
    return res.send('Please add all fields');
  }
  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    return res.send('User already exist');
  }

  // Create user
  const user = await User.create({ ...req.body, photo });

  if (user) {
    res.status(200).send({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  } else {
    res.status(400);
    return res.send('Invalid user data');
  }
};

// @desc    Update User data
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.email = req.body.email;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.dob = req.body.dob;
    user.gender = req.body.gender;
    user.address = req.body.address;
    user.photo = req.body.photo;
    const updatedUser = await user.save();
    if (updatedUser) {
      return res
        .status(200)
        .send({ message: 'User Updated', data: updatedUser });
    }
  }
  return res.status(500).send({ message: 'Error in Updating User.' });
};

// @desc    Delete all User data
// @route   DELETE /api/users/:id
const deleteUser = async (req, res) => {
  const deletedUser = await User.findById(req.params.id);
  if (deletedUser) {
    await deletedUser.remove();
    res.send({ message: 'User Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
