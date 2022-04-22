import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'




const Navbar =()=>{

    return(

        <div className='navBar'>
            <nav className= "navBar-nav">
            <ul className='navBar-list'>
                <li>
                    <span>Bonjour Mr ....</span>
                </li>
                <li>
                    <a  className="navBar-list" href="/#project"><span>Deconnection</span></a>
                </li>
                
            </ul>
            </nav>
        </div>
       )
}


export default Navbar