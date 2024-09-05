import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import  LoginPage  from './components/LoginPage';
import { Navbar } from './components/Navbar';
import SignUpPage from './components/SignUpPage';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const {user} = useAuthContext();
  
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
            <Route path='/' element={user ? <Home /> : <Navigate to="/login" />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}






export default App;
