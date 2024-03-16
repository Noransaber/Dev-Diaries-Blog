/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
