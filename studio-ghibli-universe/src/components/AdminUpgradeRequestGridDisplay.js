import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';

const AdminUpgradeRequestGridDisplay = (props) => {
  const display = (upgrade_list) => {

    if (upgrade_list) {


      return upgrade_list.map((item, index) => {
        const upgradeRoute = '/upgrade/' + item.id + '#top';
        return (
          < >
            <div className="card  " style={{ maxWidth: '', backgroundColor: 'gray' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                
                <center><p className="card-text" ><small>{item.date}</small></p></center>

                </div>
                <div className="col-md-4">
                <center><p className="card-text" ><small>{item.email}</small></p></center>

                </div>

                <div className="col-md-4">
                  


                <center><button type="button" className="btn btn-success" style={{margin:'8px'}}><p className="card-text " ><small>Accept</small></p></button>
                <button type="button" className="btn btn-danger" style={{margin:'8px'}}><p className="card-text " ><small>Reject</small></p></button></center>
                   

                  
                </div>
              </div>
            </div>
          </>
        )
      })
    }
  }

  return (
    <div className="Shopping_sub_containers main" id='upgrade_shopping'>
      <div className="shoppingcontainer" >
      <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: '#1daeed' }}>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                          <div className="card-body">
                          <center><p>Date</p></center>
                          </div></div>
                          <div className="col-md-4">
                          <div className="card-body">
                          <center><p>email</p></center>
                          </div></div>
                          <div className="col-md-4">
                          <div className="card-body">
                          <center><p>Status</p></center>
                          </div></div>
                          
                        </div>
                      </div>
        <div className="shopping_grid">
          {display(props.upgrade_list)}
        </div>
      </div>
    </div>
  )
}

export default AdminUpgradeRequestGridDisplay;