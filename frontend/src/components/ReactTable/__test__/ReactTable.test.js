import React from 'react';

import { render, screen } from '@testing-library/react';

import ReactTable from '..';

describe('React Table', () => {
  it('should render users Table', () => {
    const columns = [
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
        ],
      },
    ];

    const users = [
      {
        _id: '63387506e369f196daadb3e1',
        first_name: 'Nabil',
        last_name: 'Mediouni',
        email: 'nabilmediouni8@gmail.com',
        address: '130 rue ali douagi, el amal, fouchana',
        gender: 'male',
        dob: '2000',
        photo: {
          _id: '63387501e369f196daadb3de',
          url: 'https://res.cloudinary.com/nabil-mediouni/image/upload/v1664644354/nfagw3epo30rdlolge74.png',
          createdAt: '2022-10-01T17:12:33.791Z',
          updatedAt: '2022-10-01T17:12:33.791Z',
          __v: 0,
        },
        createdAt: '2022-10-01T17:12:38.553Z',
        updatedAt: '2022-10-01T17:12:38.553Z',
        __v: 0,
      },
    ];

    render(<ReactTable columns={columns} data={users} />);
    const firstName = screen.getByText(/Nabil/i);
    expect(firstName).toBeInTheDocument();
  });

  it('should render photos Table', () => {
    const columns = [
      {
        Header: 'Photos Table',
        columns: [
          {
            Header: 'Photo',
            accessor: 'photo',
          },
        ],
      },
    ];

    const photos = [
      {
        _id: '63387501e369f196daadb3de',
        url: 'https://res.cloudinary.com/nabil-mediouni/image/upload/v1664644354/nfagw3epo30rdlolge74.png',
        createdAt: '2022-10-01T17:12:33.791Z',
        updatedAt: '2022-10-01T17:12:33.791Z',
        __v: 0,
      },
    ];

    render(<ReactTable columns={columns} data={photos} />);
    const photosElements = screen.getAllByTestId(/photo/i);
    expect(photosElements).toHaveLength(1);
  });
});
