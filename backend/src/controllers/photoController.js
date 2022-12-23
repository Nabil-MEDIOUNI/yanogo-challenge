const Photo = require('../models/photoModel');

// @desc    Get all Photos data
// @route   GET /api/photos/
const getPhotos = async (_, res) => {
  const photos = await Photo.find({});
  res.send(photos);
};

// @desc    Get Photo data
// @route   GET /api/photos/:id
const getPhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  if (photo) {
    res.send(photo);
  } else {
    res.status(404).send({ message: 'Photo Not Found!' });
  }
};

// @desc    add new photo
// @route   POST /api/photos
const addPhoto = async (req, res) => {
  const { photo } = req.body;

  // Create Photo
  const createdPhoto = await Photo.create({ url: photo });

  if (createdPhoto) {
    res.status(200).send({
      id: createdPhoto.id,
      photo: createdPhoto.url,
    });
  } else {
    res.status(400);
    return res.send('Invalid photo data');
  }
};

// @desc    Update User data
// @route   PUT /api/users/:id
const updatePhoto = async (req, res) => {
  const photoId = req.params.id;
  const findphoto = await Photo.findById(photoId);
  if (findphoto) {
    findphoto.url = req.body.photo;
    const updatedPhoto = await findphoto.save();
    if (updatedPhoto) {
      return res
        .status(200)
        .send({ message: 'Photo Updated', data: updatedPhoto });
    }
  }
  return res.status(500).send({ message: 'Error in Updating Photo.' });
};

// @desc    Delete all User data
// @route   DELETE /api/users/:id
const deletePhoto = async (req, res) => {
  const deletedPhoto = await Photo.findById(req.params.id);
  if (deletedPhoto) {
    await deletedPhoto.remove();
    res.send({ message: 'User Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
};

module.exports = {
  getPhotos,
  getPhoto,
  addPhoto,
  updatePhoto,
  deletePhoto,
};
