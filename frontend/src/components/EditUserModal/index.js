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
  TextArea,
  StyledSelect,
  SaveButton,
  CancelButton,
} from '../AddUser/UserForm/styles';
import Loader from '../Shared/Loader';

import { editUser, clearErrors } from '../../redux/actions/users';
import { addPhoto } from '../../redux/actions/photos';

import { API_URL } from '../../config';

import { Modal, TransparentBackground } from '../../utils/styles';

const EditUserModal = ({ openModal, setOpenModal, userID }) => {
  const [uploadPicture, setUploadPicture] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const { users, errors, success } = useSelector((state) => state.usersReducer);

  const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const save = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
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

  const closeAddUserModal = useCallback(() => {
    if (!uploadPicture) {
      setOpenModal(false);
    }
  }, [setOpenModal, uploadPicture]);

  useEffect(() => {
    if (success) {
      closeAddUserModal();
    }
    if (errors) {
      toast(errors);
    }
    dispatch(clearErrors());
  }, [closeAddUserModal, dispatch, errors, success]);

  useEffect(() => {
    const getUser = users.find((user) => user._id === userID);
    setFormData(getUser);
  }, [users, userID]);

  if (openModal === false || !formData) {
    return '';
  }

  return (
    <>
      <TransparentBackground onClick={closeAddUserModal} />
      <Modal>
        <Form onSubmit={save} autoComplete="off">
          <FormGroup>
            <Label htmlFor="label">First Name</Label>
            <Input
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              type="email"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Gender</Label>
            <StyledSelect
              options={GENDER_OPTIONS}
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <TextArea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              name="dob"
              placeholder="yyyy-mm-dd"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Photo</Label>
            <Input name="photo" type="file" onChange={handleUploadFile} />
          </FormGroup>
          <FormGroup>
            <SaveButton type="submit" disabled={uploadPicture}>
              Save
            </SaveButton>
            <CancelButton
              type="button"
              onClick={closeAddUserModal}
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

EditUserModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  userID: PropTypes.string.isRequired,
};

export default EditUserModal;
