import React, { Component } from 'react';
import WishlistDisplay from '../components/WishlistDisplay';
import { wishlist } from '../actions/actionfile';
import { connect } from 'react-redux';
//import axios from 'axios';
//const wishlist_url = "https://studio-ghibli-universe-api.herokuapp.com/wishlist";

class Wishlist extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         wishlist: ''
    //     }
    // }
    componentDidMount() {
        //const response = await axios.get(wishlist_url);
        this.props.dispatch(wishlist());


        //this.setState({ wishlist: filtering });


        // this.setState({ wishlist: response.data })
        //console.log(response.data)
    }
    render() {
        if (sessionStorage.getItem('email') === null) {
            this.props.history.push('/')
        }
        let filtering='';
        if (this.props.wishlist) {
            filtering = this.props.wishlist.filter((item) => {
                return sessionStorage.getItem('email') === item.email
            })
        }
        return (
            
            <div className="container">
                <WishlistDisplay wishlist={filtering} />
            </div>
        )
    }

    
}

function mapStateToProps(state) {
    console.log(state.wishlist)
    return {
        wishlist: state.wishlist
    }

}

export default connect(mapStateToProps)(Wishlist);