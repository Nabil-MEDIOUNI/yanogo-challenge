import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LandingPage from './landing-page';
import PhotosPage from './photos';
import UsersPage from './users';
import SingleUserPage from './single-user';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUserPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        {/* <Route path="/photos/:id" element={<Profile />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
