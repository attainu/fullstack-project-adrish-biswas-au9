import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';

const ShoppingDVDGridDisplay = (props) => {
  const display = (dvdslist) => {
    if (dvdslist) {
       

        return dvdslist.map((item,index) => {
                return (
                    < >
                        <div className="card mb-3 card shopping_p_c" style={{ maxWidth: '300px', backgroundColor: '#1daeed' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item.image_url} className="card-img" alt="product_image" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">


                                    <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                    <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
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
<div className="Shopping_sub_containers main">
            <div className="shoppingcontainer" >
                <div className="shopping_grid">
                {display(props.dvdslist)}
            </div>
        </div>
    </div>
)
}

export default ShoppingDVDGridDisplay;