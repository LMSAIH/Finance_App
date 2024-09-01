import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux'


function App() {
  return (
      <BrowserRouter>
        <div className="Wrapper">
          <Navbar />
          <div className='Content'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}




const Navbar = () => {
  return (

    <nav className="Navbar">
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link>Landing page</Link>
      </div>
      <div>
        <Link>Login</Link>
      </div>
      <div>
        <Link>Sign up</Link>
      </div>
    </nav>
  )
}

export default App;
