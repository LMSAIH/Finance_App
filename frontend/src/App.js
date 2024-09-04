import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { LoginPage } from './components/LoginPage';
import { Navbar } from './components/Navbar';
import SignUpPage from './components/SignUpPage';


function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <div className="Navbar">
         <Navbar />
        </div>
        <div className='Content'>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path = '/signup' element={<SignUpPage />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}






export default App;
