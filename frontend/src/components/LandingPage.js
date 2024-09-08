import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../Landing.css';
import logo from './images/image.png';


const LandingPage = () => {
    return ( 
       
            <div className="wrapper">
        
                <nav className=".navbar">
                    <img src={logo} alt="Logo" height="100px" />
        
                    <div className="spread">
                            
                        <ul className="nav-list">
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/signup'>Sign up</a></li>
                            <li>
                                <div className="rightNav">
                                    <input type="text" name="search" id="search" placeholder="Search"/>
                                    <button className="btn">🔍</button>
                                </div>
                            </li>
                        </ul>
                        
        
                    </div>
                </nav>
        
                <div className="container">
                    <h1>Welcome to Finance App!</h1>
                    <h3>Your personal wallet</h3>
                    <p>Manage your finances in one place.</p>
                </div>
            </div>

     );
}
 
export default LandingPage;