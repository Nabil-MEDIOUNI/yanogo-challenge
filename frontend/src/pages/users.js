import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonsContainer,
  ShowButton,
  EditButton,
  DeleteButton,
  ReactTableStyles,
} from '../components/ReactTable/styles';

import ReactTable from '../components/ReactTable';
import AddUserModal from '../components/AddUser/AddUserModal';
import EditUserModal from '../components/EditUserModal';

import { deleteUser, getAllUsers } from '../redux/actions/users';
import {
  PageContainer,
  AddButton,
  EmptyTableMessage,
  BackButton,
  UserLogo,
} from '../utils/styles';

function UsersPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userID, setUserID] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.usersReducer);

  const onDeleteUser = useCallback(
    (id) => {
      dispatch(deleteUser(id)).then(() => {
        dispatch(getAllUsers());
      });
    },
    [dispatch],
  );

  const goBack = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Users Table',
        columns: [
          {
            Header: 'Photo',
            accessor: 'photo',
          },
          {
            Header: 'First Name',
            accessor: 'first_name',
          },
          {
            Header: 'Last Name',
            accessor: 'last_name',
          },
          {
            Header: 'Gender',
            accessor: 'gender',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
          {
            Header: 'Date of Birth',
            accessor: 'dob',
          },
          {
            Header: 'Actions',
            Cell: (row) => (
              <ButtonsContainer>
                <ShowButton
                  type="button"
                  onClick={() => navigate(`/users/${row.row.original._id}`)}
                >
                  Show
                </ShowButton>
                <EditButton
                  type="button"
                  onClick={() => {
                    setOpenEditModal(true);
                    setUserID(row.row.original._id);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  type="button"
                  onClick={() => onDeleteUser(row.row.original._id)}
                >
                  Delete
                </DeleteButton>
              </ButtonsContainer>
            ),
          },
        ],
      },
    ],
    [onDeleteUser, navigate],
  );

  return (
    <PageContainer data-testid="users-page">
      <BackButton type="button" onClick={goBack}>
        {'<'}
      </BackButton>
      <AddUserModal openModal={openModal} setOpenModal={setOpenModal} />
      <UserLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Add_user_icon_%28blue%29.svg/895px-Add_user_icon_%28blue%29.svg.png"
        alt="user"
      />
      <AddButton onClick={() => setOpenModal(true)}>Add User</AddButton>
      <ReactTableStyles>
        <ReactTable columns={columns} data={users} />
        {users.length === 0 && (
          <EmptyTableMessage>Table is Empty!</EmptyTableMessage>
        )}
      </ReactTableStyles>
      <EditUserModal
        userID={userID}
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
      />
    </PageContainer>
  );
}

export default UsersPage;
