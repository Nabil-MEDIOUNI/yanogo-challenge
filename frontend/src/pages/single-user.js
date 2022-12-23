import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
} from '../components/AddUser/UserForm/styles';

import { BackButton } from '../utils/styles';

import { getUser } from '../redux/actions/users';

function SingleUserPage() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.usersReducer);

  const USER_ID = pathname.split('/')[2];
  const getUserPhoto =
    user.photo?.url ||
    `https://cdn-expa.aiesec.org/gis-img/missing_profile_${user.first_name
      ?.replace(/\s/g, '')
      .charAt(0)
      .toLowerCase()}.svg`;

  const goBack = () => {
    navigate('/users');
  };

  useEffect(() => {
    dispatch(getUser(USER_ID));
  }, [dispatch, USER_ID]);

  return (
    <>
      <BackButton type="button" onClick={goBack}>
        {'<'}
      </BackButton>
      <Form autoComplete="off">
        <FormGroup>
          <Label htmlFor="label">Photo</Label>
          <img src={getUserPhoto} alt={user.id} width={65} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="label">First Name</Label>
          <Input value={user.first_name} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input value={user.last_name} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input value={user.email} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Input value={user.gender} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <TextArea value={user.address} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Date of Birth</Label>
          <Input value={user.dob} disabled />
        </FormGroup>
      </Form>
    </>
  );
}

export default SingleUserPage;
