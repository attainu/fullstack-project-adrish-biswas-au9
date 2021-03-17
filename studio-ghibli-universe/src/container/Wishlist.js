
import React, { Component } from 'react';
import WishlistDisplay from '../components/WishlistDisplay';
import axios from 'axios';

const wishlist_url = "https://studio-ghibli-universe-api.herokuapp.com/wishlist";

class Wishlist extends Component {
    constructor() {
        super()

        this.state = {
            wishlist: ''
        }
    }

    render() {
        if (sessionStorage.getItem('email') === null) {
            this.props.history.push('/')
        }

        return (
            <div className="container">
                <WishlistDisplay wishlist={this.state.wishlist} />
            </div>
        )
    }

    async componentDidMount() {
        const response = await axios.get(wishlist_url);


        const filtering = response.data.filter((item) => {
            return sessionStorage.getItem('email') === item.email
        })
        this.setState({ wishlist: filtering });


        // this.setState({ wishlist: response.data })
        //console.log(response.data)
    }
}

export default Wishlist;