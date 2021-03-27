import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import Logout from './Logout';

const gurl = "https://studio-ghibli-universe-backend.herokuapp.com/orders/register"

class Header extends Component {
  constructor() {
    super()

    this.state = {
      video_url: '',
      movie_url: '',
      allow_button: true,
      allow_modal_2: false,
      allow_movie: false
    }
  }
  handleGhiblian = () => {
    fetch(gurl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: sessionStorage.getItem('email'), status: "pending" })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Data Registered!") {
          alert("Your request has been registered; wait for a while and login again.")
          this.setState({ allow_button: false })
        }
        else {
          alert("error")
        }

      })
      .catch((err, data) => {
        alert("error catch")
      })
  }
  render() {

    return (
      <nav className="navbar sticky-top navbar-expand navbar-dark main" style={{ backgroundColor: "#111" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <HashLink className="nav-link" id="home-link" to="/home#top">Home<span className="sr-only">(current)</span></HashLink>
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
                to="/wishlist#top"
              >My Ghibli Universe
                <span className="sr-only">(current)</span>
              </HashLink>
            </li>

            {
              sessionStorage.getItem('role') == 'admin' ?
                <li className="nav-item nav-item active" >
                  <HashLink className="nav-link" id="home-link"
                    to="/home#Locations_heading"
                  >Admin Dashboard
                  <span className="sr-only">(current)</span>
                  </HashLink>
                </li> :
                sessionStorage.getItem('role') == 'ghiblian' ?
                  <li className="nav-item nav-item active" >
                    <HashLink className="nav-link" id="home-link"
                      to="/home#Locations_heading"
                    >My Plan
                  <span className="sr-only">(current)</span>
                    </HashLink>
                  </li> :
                  <li className="nav-item nav-item active" >
                    {
                      this.state.allow_button ?
                      <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }} onClick={this.handleGhiblian}><h6>Become a Ghiblian!</h6>
                        <span className="sr-only">(current)</span>
                      </button> : null
                    }

                  </li>
            }


          </ul>


          <div style={{ padding: '5px' }}><Logout /></div>

          <HashLink to='/home#top'><img style={{ borderRadius: '5px' }} src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" width="100" height="46" id="header-image" className="d-inline-block align-bottom" alt="" loading="lazy" /></HashLink>

        </div>
      </nav>
    )
  }


}

export default Header;