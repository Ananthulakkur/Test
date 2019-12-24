import React from 'react'
import { Link } from "@reach/router";

import './navbar.css'

class NavBar extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <div className='menu-list'>
            <ul className='navbar-menu'>
              <li>
                <Link to="/">Payment</Link>
              </li>
              <li>
                <Link to="/History">History</Link>
              </li>
              <li>
                <Link to="/Document">Document</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              </ul>
         </div>
        <div className="la-nav-bar-right-section">Signout</div>
      </nav>
    );
 }
}

export default NavBar