const express = require('express');
const photoRouter = express.Router();
const {
  getPhotos,
  getPhoto,
  addPhoto,
  updatePhoto,
  deletePhoto,
} = require('../controllers/photoController');

photoRouter.get('/', getPhotos);
photoRouter.get('/:id', getPhoto);
photoRouter.post('/add', addPhoto);
photoRouter.put('/:id', updatePhoto);
photoRouter.delete('/:id', deletePhoto);

module.exports = photoRouter;
