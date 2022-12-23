import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';

import LandingPage from '../landing-page';
import UsersPage from '../users';
import PhotosPage from '../photos';

import store from '../../redux/store';

describe('Landing Page', () => {
  it('should render Landing Page Content', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    const usersPageButton = screen.getByText(/Users Page/i);
    expect(usersPageButton).toBeInTheDocument();
    const PhotosPageButton = screen.getByText(/Photos Page/i);
    expect(PhotosPageButton).toBeInTheDocument();
  });
});

describe('Users Page', () => {
  it('should render Users Page Content', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UsersPage />
        </Provider>
      </BrowserRouter>,
    );
    const usersPageID = screen.getByTestId('users-page');
    expect(usersPageID).toBeInTheDocument();
  });
});

describe('Photos Page', () => {
  it('should render Photos Page Content', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PhotosPage />
        </Provider>
      </BrowserRouter>,
    );
    const usersPageID = screen.getByTestId('photos-page');
    expect(usersPageID).toBeInTheDocument();
  });
});
