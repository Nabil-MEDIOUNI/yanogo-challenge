import React from 'react';

import { render, screen } from '@testing-library/react';

import UserForm from '..';

const mockedHandleChange = jest.fn();
const mockedHandleUploadFile = jest.fn();
const mockedCloseAddUserModal = jest.fn();
const mockedSave = jest.fn();

describe('User Form', () => {
  it('should render user Form', () => {
    render(
      <UserForm
        handleChange={mockedHandleChange}
        handleUploadFile={mockedHandleUploadFile}
        disableButton={false}
        closeAddUserModal={mockedCloseAddUserModal}
        save={mockedSave}
      />,
    );
    const firstName = screen.getByText(/First Name/i);
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText(/Last Name/i);
    expect(lastName).toBeInTheDocument();
  });
});
