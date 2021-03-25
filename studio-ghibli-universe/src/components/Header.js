import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import Logout from './Logout';

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark main" style={{ backgroundColor: "#111" }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <HashLink className="nav-link" id="home-link" to="/home#top">Home<span className="sr-only">(current)</span></HashLink>
          </li>
          <li className="nav-item nav-item active" >
            {/* <HashLink className="nav-link" id="home-link" 
              to="/home#Movies_heading"
            >Community
            <span className="sr-only">(current)</span>
            </HashLink> */}
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/shopping#top"
            >Shopping
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#Locations_heading"
            >Become a Ghiblian!
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/wishlist#top"
            >My Ghibli Universe
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>

        </ul>
        
        
        <div style={{padding:'5px'}}><Logout/></div>

        <HashLink to = '/home#top'><img style={{borderRadius: '5px' }} src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" width="100" height="46" id="header-image" className="d-inline-block align-bottom" alt="" loading="lazy" /></HashLink>

      </div>
    </nav>
  )
}

export default Header;