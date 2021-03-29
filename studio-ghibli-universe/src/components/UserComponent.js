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

      if (watchlist) {

        return watchlist.map((item, index) => {
          const route = '/films/' + item.movieid + '#top';

          return (


            <>
              <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693', padding: '5px' }}>
                <div className="row no-gutters">

                  <div className="col-md-6" style={{ padding: '80px 0px 0px 20px' }}>
                    <h4>{item.moviename}</h4>
                  </div>

                  <div className="col-md-6">
                    <center><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></HashLink></center>
                  </div>

















                </div></div>

            </>



          )
        })
      }
    }
  }

  return (
    <div className="Shopping_sub_containers main" id='user_shopping'>
      <div className="shoppingcontainer" >
        <div className="shopping_grid">
          {console.log(props.user_email, "user")}

          <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#0f78af', padding: '5px' }}>
            <div className="row no-gutters">

              <div className="col-md-12" >
                <center>
                  {props.username ? <h2 style={{ padding: '20px', color: 'black' }}>{props.username}'s watchlist </h2> : null}
                </center>

              </div>

            </div></div>



         
            {props.watchlist.length > 0 ?
              display(props.watchlist):<div><h2 style={{color:'wheat', padding:'160px 50px 160px 50px'}}>{props.username}'s watchlist is empty!!!</h2></div>
            }
          


          </div>
      </div>
    </div>
  )


}

export default UserComponent;