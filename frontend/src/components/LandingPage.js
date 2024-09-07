import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../Landing.css';

const LandingPage = () => {
    return ( 
    
    <div className="wrapper">

        <nav className="navbar">
            <img src="https://www.shutterstock.com/image-vector/flat-vector-cute-cartoon-panda-600nw-2343798945.jpg" alt="Logo" height={50} />
            <div className="contact-login">
                    
            <div>
                <Link to='/login'>Login</Link>
                </div>
                <div>
                <Link to='/signup'>Sign up</Link>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button>🔍</button>
                </div>
            </div>
        </nav>

        <div className="container">
            <h1>Welcome to FinanceApp</h1>
            <p>Manage your finances in one place.</p>
        </div>
    </div>
    


     );
}
 
export default LandingPage;