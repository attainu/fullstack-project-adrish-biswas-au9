import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';

const AdminUserControlGridDisplay = (props) => {
    const display = (user_list) => {
        
        if (user_list) {
          console.log(user_list, "user")
           

            return user_list.map((item,index) => {
                const userRoute = '/user/' + item.id + '#top';
                    return (
                      < >
                      
                      <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: 'gray' }}>
                        <div className="row no-gutters">
                          <div className="col-md-3">
                          <div className="card-body">
                          
                          <center><p className="card-text" ><small>{item.name}</small></p></center>
          
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p className="card-text" ><small>{item.email}</small></p></center>
          
                          </div></div>

                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p className="card-text" ><small>{item.role}</small></p></center>
          
                          </div></div>
          
                          <div className="col-md-3">
                          <div className="card-body">
                          
                          {
                            item.role == "user" ? 
                            null:
                            <center><button type="button" className="btn btn-light" style={{margin:'5px', padding:'0px 10px 0px 10px', }}><p className="card-text" ><small>change to user</small></p></button> </center>
                          }
                          {
                            item.role == "admin" ? 
                            null:
                            <center><button type="button" className="btn btn-warning" style={{margin:'5px', padding:'0px 20px 0px 20px'}}><p className="card-text" ><small>change to admin</small></p></button> </center>
                          }
                          {
                            item.role == "ghiblian" ? 
                            null:
                            <center><button type="button" className="btn btn-info" style={{margin:'5px', padding:'0px 5px 0px 5px'}}><p className="card-text" ><small>change to ghiblian</small></p></button> </center>
                          }
                          
                            <center><button type="button" className="btn btn-danger" style={{margin:'5px', padding:'0px 5px 0px 5px'}}><p className="card-text" ><small>delete account</small></p></button> </center>
                          
                          
          
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    )
            })
        }
    }

    return (
        <div className="Shopping_sub_containers main" id= 'user_shopping'>
            <div className="shoppingcontainer" >
                <div className="shopping_grid">
                {console.log(props.user_list, "user")}
                <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: '#1daeed' }}>
                        <div className="row no-gutters">
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>name</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>email</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>role</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>Edit_User</p></center>
                          </div></div>
                        </div>
                      </div>
                    {display(props.user_list)}
                    
                </div>
            </div>
        </div>
    )
}

export default AdminUserControlGridDisplay;