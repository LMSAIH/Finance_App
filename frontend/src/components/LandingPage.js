import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../Landing.css';
import el from "./LandingPage.css"


const LandingPage = () => {
    return ( 
       
            <div className={el.wrapper}>
        
                <nav className={el.navbar}>
                    <img src="../components/images/image.png" alt="Logo" height="100px" />
        
                    <div className={el.spread}>
                            
                        <ul className={el.navlist}>
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/signup'>Sign up</a></li>
                            <li>
                                <div className={el.rightNav}>
                                    <input type="text" name="search" id="search" placeholder="Search"/>
                                    <button className={el.button}>🔍</button>
                                </div>
                            </li>
                        </ul>
                        
        
                        
        
                    </div>
                </nav>
        
                <div className={el.container}>
                    <h1>Welcome to Finance App!</h1>
                    <h3>Your personal wallet</h3>
                    <p>Manage your finances in one place.</p>
                </div>
            </div>

     );
}
 
export default LandingPage;