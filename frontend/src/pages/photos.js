import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonsContainer,
  EditButton,
  DeleteButton,
  ReactTableStyles,
} from '../components/ReactTable/styles';

import ReactTable from '../components/ReactTable';
import AddPhotoModal from '../components/AddPhoto/AddPhotoModal';
import EditPhotoModal from '../components/EditPhotoModal';

import { deletePhoto, getAllPhotos } from '../redux/actions/photos';
import {
  PageContainer,
  AddButton,
  EmptyTableMessage,
  BackButton,
  UserLogo,
} from '../utils/styles';

function PhotosPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [photoID, setPhotoID] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { photos } = useSelector((state) => state.photosReducer);

  const onDeletePhoto = useCallback(
    (id) => {
      dispatch(deletePhoto(id)).then(() => {
        dispatch(getAllPhotos());
      });
    },
    [dispatch],
  );

  const goBack = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Photos Table',
        columns: [
          {
            Header: 'Photo',
            accessor: 'photo',
          },
          {
            Header: 'Actions',
            Cell: (row) => (
              <ButtonsContainer>
                <EditButton
                  type="button"
                  onClick={() => {
                    setOpenEditModal(true);
                    setPhotoID(row.row.original._id);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  type="button"
                  onClick={() => onDeletePhoto(row.row.original._id)}
                >
                  Delete
                </DeleteButton>
              </ButtonsContainer>
            ),
          },
        ],
      },
    ],
    [onDeletePhoto],
  );

  return (
    <PageContainer data-testid="photos-page">
      <BackButton type="button" onClick={goBack}>
        {'<'}
      </BackButton>
      <AddPhotoModal openModal={openModal} setOpenModal={setOpenModal} />
      <UserLogo
        src="https://cdn4.iconfinder.com/data/icons/seo-web-blue-1/100/seo__web_blue_1_46-512.png"
        alt="photo"
      />
      <AddButton onClick={() => setOpenModal(true)}>Add Photo</AddButton>
      <ReactTableStyles>
        <ReactTable columns={columns} data={photos} />
        {photos.length === 0 && (
          <EmptyTableMessage>Table is Empty!</EmptyTableMessage>
        )}
      </ReactTableStyles>
      <EditPhotoModal
        photoID={photoID}
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
      />
    </PageContainer>
  );
}

export default PhotosPage;
