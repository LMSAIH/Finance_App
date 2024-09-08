import React from 'react';
//import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import LoginPage from './components/LoginPage';
import { Navbar } from './components/Navbar';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import { useAuthContext } from './hooks/useAuthContext';
import { ChangeFinanceForm } from './components/ChangeFinanceForm';

function AppContent() {

  
  const { user } = useAuthContext();
  const location = useLocation();

  (location.pathname === '/') ? import( './components/LandingPage.css') : import ('./App.css');

  return (
    <div className={location.pathname === '/' ? "wrapper" : "Wrapper"}>
      <div className="Navbar">
        {location.pathname === '/' ? <div /> : <Navbar />}
      </div>
      <div className={location.pathname === '/' ? "" : "Content"}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/change/:id' element={<ChangeFinanceForm />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/home' element={user ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
