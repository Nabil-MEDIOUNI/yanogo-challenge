import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import axios from 'axios';

import UserForm from './UserForm';
import Loader from '../Shared/Loader';

import { addUser, clearErrors, getAllUsers } from '../../redux/actions/users';
import { addPhoto } from '../../redux/actions/photos';

import { API_URL } from '../../config';

import { Modal, TransparentBackground } from '../../utils/styles';

const AddUserModal = ({ openModal, setOpenModal }) => {
  const [uploadPicture, setUploadPicture] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const { errors, success } = useSelector((state) => state.usersReducer);

  const save = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
  };

  const handleChange = (e) => {
    if (e.value) {
      setFormData({ ...formData, gender: e.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

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

  const closeAddUserModal = () => {
    if (!uploadPicture) {
      setOpenModal(false);
      setFormData({});
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(getAllUsers());
      toast(success);
      setFormData({});
      closeAddUserModal();
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
      <TransparentBackground onClick={closeAddUserModal} />
      <Modal>
        <UserForm
          handleChange={handleChange}
          handleUploadFile={handleUploadFile}
          disableButton={uploadPicture}
          closeAddUserModal={closeAddUserModal}
          save={save}
        />
      </Modal>
      {uploadPicture && <Loader />}
    </>
  );
};

AddUserModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default AddUserModal;
