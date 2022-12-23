import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import axios from 'axios';

import {
  Form,
  FormGroup,
  Label,
  Input,
  SaveButton,
  CancelButton,
} from '../AddUser/UserForm/styles';
import Loader from '../Shared/Loader';

import {
  editPhoto,
  clearErrors,
  getAllPhotos,
} from '../../redux/actions/photos';

import { API_URL } from '../../config';

import { Modal, TransparentBackground } from '../../utils/styles';

const EditPhotoModal = ({ openModal, setOpenModal, photoID }) => {
  const [uploadPicture, setUploadPicture] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const { photos, errors, success } = useSelector(
    (state) => state.photosReducer,
  );

  const handleUploadFile = async (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    setUploadPicture(true);
    await axios.post(`${API_URL}/files`, data).then(async (response) => {
      setNewImage(response.data.fileUrl);
      setUploadPicture(false);
    });
  };

  const closeAddPhotoModal = useCallback(() => {
    if (!uploadPicture) {
      setOpenModal(false);
    }
  }, [setOpenModal, uploadPicture]);

  const save = (e) => {
    e.preventDefault();
    dispatch(editPhoto({ _id: photoID, photo: newImage }));
    closeAddPhotoModal();
  };

  useEffect(() => {
    if (success) {
      dispatch(getAllPhotos());
      closeAddPhotoModal();
    }
    if (errors) {
      toast(errors);
    }
    dispatch(clearErrors());
  }, [closeAddPhotoModal, dispatch, errors, success]);

  useEffect(() => {
    const getPhoto = photos.find((photo) => photo._id === photoID);
    setFormData(getPhoto);
  }, [photos, photoID]);

  if (openModal === false || !formData) {
    return null;
  }

  return (
    <>
      <TransparentBackground onClick={closeAddPhotoModal} />
      <Modal>
        <Form onSubmit={save} autoComplete="off">
          <FormGroup>
            <Label>Photo</Label>
            <Input name="photo" type="file" onChange={handleUploadFile} />
          </FormGroup>
          <FormGroup>
            <SaveButton type="submit" disabled={uploadPicture || !newImage}>
              Save
            </SaveButton>
            <CancelButton
              type="button"
              onClick={closeAddPhotoModal}
              disabled={uploadPicture}
            >
              Cancel
            </CancelButton>
          </FormGroup>
        </Form>
      </Modal>
      {uploadPicture && <Loader />}
    </>
  );
};

EditPhotoModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  photoID: PropTypes.string.isRequired,
};

export default EditPhotoModal;
