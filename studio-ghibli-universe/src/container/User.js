import React, { Component } from 'react';
import ShoppingDVDGridDisplay from '../components/ShoppingDVDGridDisplay';
import ShoppingPosterGridDisplay from '../components/ShoppingPosterGridDisplay';
import ShoppingTshirtGridDisplay from '../components/ShoppingTshirtGridDisplay';
import ShoppingAccessoriesGridDisplay from '../components/ShoppingAccessoriesGridDisplay'
import ShoppingBlurayGridDisplay from '../components/ShoppingBlurayGridDisplay';
import ShoppingVideogamesGridDisplay from '../components/ShoppingVideogamesGridDisplay';
import AdminUpgradeRequestGridDisplay from '../components/AdminUpgradeRequestGridDisplay';
import AdminUserControlGridDisplay from '../components/AdminUserControlGridDisplay';
import UserComponent from '../components/UserComponent'
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Unimain.css';


// const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
// const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
const user_info = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/userInfo';
const films_playlist_url = "https://ghibli-json-server.herokuapp.com/films_playlist";

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      error: '',
      watchlist: ''
    }
  }



  render() {
    let filtering=''
    if (sessionStorage.getItem('email') == null) {
      this.props.history.push('/')
    }
    console.log(this.state, 'hello')

    if(this.state.watchlist){
      filtering=this.state.watchlist.filter((item,index)=>{
        return this.state.user.email === item.email
      })
    }
    



    return (
      <>
        <Header />
        <SideBar />

        <UserComponent watchlist={filtering} />

      </>
    )
  }


  async getUserInfo() {
    await fetch(`${user_info}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({ _id: this.props.match.params.id })
    })

      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data })


      })
      .catch((err) => {
        this.setState({ error: err })
      });
      await axios.get(films_playlist_url)
      .then((response) => {
        this.setState({ watchlist: response.data })
      })

  };

  componentDidMount() {
    this.getUserInfo();
  }
}
export default User;