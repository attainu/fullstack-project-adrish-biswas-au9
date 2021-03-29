import React, { Component } from 'react';
import './WatchlistlistDisplay.css';
import { connect } from 'react-redux';
import { shopping_wishlist_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';

//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";


class WishlistDisplay extends Component {
    handleSubmit = (shopping_wishlist) => {
        this.props.dispatch(shopping_wishlist_delete(shopping_wishlist))
        // fetch(`${wishlist_url}/${wishlist.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // });
        alert("Removed from wishlist!")
    }
    renderTable = ({ shopping_wishlist }) => {
        if (shopping_wishlist) {

            return shopping_wishlist.map((item) => {

                const route = '/' + item.shopping_id + '#top'
                return (
                    <>
                        <tr>
                            <td ><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.shopping_image}></img></HashLink></td>
                            <td>{item.name}<br /><br /><button className="btn" onClick={() => { this.handleSubmit(item) }}><img alt='delete_bin' src="https://img.icons8.com/fluent/48/000000/filled-trash.png" /></button></td>
                            <td>{item.date}</td>
                        </tr>

                    </>

                )
            })
        }
    }

    render() {
        let object = (<div></div>)
        if (this.props.shopping_wishlist) {
            object = (this.props.shopping_wishlist.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h4 >Add an item to wishlist to make it a part of your Ghibli Universe!</h4>
                    </div>
                ) :
                (<table className="table table-responsive">

                    <thead>
                        <tr>

                            <th>Item</th>
                            <th>Item name</th>
                            <th>Date</th>
                        </tr>
                    </thead>


                    <tbody>

                        {this.renderTable(this.props)}


                    </tbody>
                </table>)
        }

        return (
            <div className="container" id="wishlist_display" style={{ paddingTop: '100px' }}>
                <h3 className='wishlist_heading'>{sessionStorage.getItem('name')}'s Shopping Wishlist</h3>
                { object }
            </div >
            
        )
    }

}

export default connect()(WishlistDisplay);
