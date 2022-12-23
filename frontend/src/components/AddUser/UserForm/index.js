import React from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  StyledSelect,
  SaveButton,
  CancelButton,
} from './styles';

const UserForm = ({
  handleChange,
  handleUploadFile,
  disableButton,
  closeAddUserModal,
  save,
}) => {
  const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Form onSubmit={save} autoComplete="off">
      <FormGroup>
        <Label htmlFor="label">First Name</Label>
        <Input
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Gender</Label>
        <StyledSelect
          options={GENDER_OPTIONS}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <TextArea
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Date of Birth</Label>
        <Input
          name="dob"
          placeholder="yyyy-mm-dd"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Photo</Label>
        <Input name="photo" type="file" onChange={handleUploadFile} required />
      </FormGroup>
      <FormGroup>
        <SaveButton type="submit" disabled={disableButton}>
          Save
        </SaveButton>
        <CancelButton
          type="button"
          onClick={closeAddUserModal}
          disabled={disableButton}
        >
          Cancel
        </CancelButton>
      </FormGroup>
    </Form>
  );
};

UserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleUploadFile: PropTypes.func.isRequired,
  closeAddUserModal: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
};

export default UserForm;
