import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/Reset.scss';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
