import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from './LandingPage.css';
import logo from './images/image.png';


const LandingPage = () => {
    return ( 
       
            <div className="wrapper">
        
                <nav className="navbar">
                    <img src={logo} alt="Logo" height="100px" />
        
                    <div className="spread">
                            
                        <ul className="navlist">
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/signup'>Sign Up</a></li>
                        </ul>
                        
        
                    </div>
                </nav>
        
                <div className="container">
                    <h1>Welcome to Finance App</h1>
                    <h3>Your personal wallet</h3>
                    <p>Manage all your finances in one place.</p>
                </div>
            </div>

     );
}
 
export default LandingPage;