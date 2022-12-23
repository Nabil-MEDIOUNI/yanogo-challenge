const express = require('express');
const userRouter = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/add', addUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
