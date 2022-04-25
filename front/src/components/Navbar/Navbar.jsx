import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css'




const Navbar =()=>{

    const user = useSelector(state=> state.user)

    return(

        <div className='navBar'>
            <nav className= "navBar-nav">
            <ul className='navBar-list'>
                <li>
                    <span className='navBar-list'>Bonjour Mr {user.last_name}</span>
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