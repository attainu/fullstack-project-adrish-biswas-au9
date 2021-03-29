import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';
const user_delete_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/delete';
const user_edit_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/edit';







const UserComponent = (props) => {
  const display = (watchlist) => {

    if (watchlist) {
      console.log(watchlist, "user")


      return watchlist.map((item, index) => {
        const userRoute = '/user/' + item._id + '#top';
        
        return (
          < >

            <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: '#687693' }}>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="card-body">

                    <p className="card-text" ><small>{item.moviename}</small></p>

                  </div></div>
                <div className="col-md-6">
                  <div className="card-body">
                    <center><p className="card-text" ><small><HashLink to={userRoute} className='btn btn-primary'> view profile</HashLink></small></p></center> 

                  </div></div>

                

                
              </div>
            </div>
          </>
        )
      })
    }
  }

  return (
    <div className="Shopping_sub_containers main" id='user_shopping'>
      <div className="shoppingcontainer" >
        <div className="shopping_grid">
          {console.log(props.user_email, "user")}
          <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: '#1daeed' }}>
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <p>name</p>
                </div></div>
              <div className="col-md-6">
                <div className="card-body">
                  <center><p>profile</p></center>
                </div></div>
              
              
            </div>
          </div>
          {display(props.watchlist)}

        </div>
      </div>
    </div>
  )
}

export default UserComponent;