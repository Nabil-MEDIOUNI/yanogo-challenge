import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LandingPageContainer,
  NavigateButtonContainer,
  NavigateButton,
  Logo,
} from '../utils/styles';

import PhotosPath from '../assets/photos.jpg';
import UsersPath from '../assets/users.jpg';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <LandingPageContainer>
      <Logo src="https://www.yanogo.de/static/favicon.ico" alt="logo" />
      <NavigateButtonContainer onClick={() => navigate('/users')}>
        <NavigateButton img={UsersPath} />
        <p>Users Page</p>
      </NavigateButtonContainer>
      <NavigateButtonContainer onClick={() => navigate('/photos')}>
        <NavigateButton img={PhotosPath} />
        <p>Photos Page</p>
      </NavigateButtonContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
