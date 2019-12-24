import React from 'react';
import './header.css';
import LALogo from '../../media/png/LALogo.png';
import NavBar from '../navbar/NavBar';

function Header() {
    return(
        <div className="App-Header">
            <Logo />
            <Language />
            <NavBar />
        </div>
    )    
}

export default Header

function Logo() {
    return (
        <div>
            <img className="logo" src={LALogo} alt="LALogo" />
        </div>
    )
}   

function Language(){
    return (
        <div className="language">
            <span>English</span> <span> | </span> <span>Spanish</span>
         </div> 
    );   
}