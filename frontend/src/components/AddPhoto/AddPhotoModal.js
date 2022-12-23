import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import axios from 'axios';

import Loader from '../Shared/Loader';

import {
  addPhoto,
  clearErrors,
  getAllPhotos,
} from '../../redux/actions/photos';

import {
  Form,
  FormGroup,
  Label,
  Input,
  CancelButton,
} from '../AddUser/UserForm/styles';

import { Modal, TransparentBackground } from '../../utils/styles';

import { API_URL } from '../../config';

const AddPhotoModal = ({ openModal, setOpenModal }) => {
  const [uploadPicture, setUploadPicture] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const { errors, success } = useSelector((state) => state.usersReducer);

  const handleUploadFile = async (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    setUploadPicture(true);
    await axios.post(`${API_URL}/files`, data).then(async (response) => {
      dispatch(
        addPhoto({
          photo: response.data.fileUrl,
        }),
      ).then((response) => {
        setUploadPicture(false);
        setFormData({ ...formData, photo: response.data.id });
      });
    });
  };

  const closeAddPhotoModal = () => {
    if (!uploadPicture) {
      setOpenModal(false);
      setFormData({});
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(getAllPhotos());
      toast(success);
      setFormData({});
      closeAddPhotoModal();
    }
    if (errors) {
      toast(errors);
    }
    dispatch(clearErrors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, success]);

  if (openModal === false) {
    return null;
  }

  return (
    <>
      <TransparentBackground onClick={closeAddPhotoModal} />
      <Modal>
        <Form>
          <FormGroup>
            <Label>Photo</Label>
            <Input
              name="photo"
              type="file"
              onChange={handleUploadFile}
              required
            />
          </FormGroup>
          <FormGroup>
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

AddPhotoModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default AddPhotoModal;
