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


const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
const user_info = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/userInfo';

class User extends Component {
  constructor() {
    super()
    this.state = {
      users: '',
      error: '',
    }
  }

  changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
    const filtering = this.state.users.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
      (data) => {
        return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
      }
    )
    this.setState({ users_filtered: filtering });//changing state's value
  }





  render() {
    if (sessionStorage.getItem('email') == null) {
      this.props.history.push('/')
    }
console.log(this.state, 'hello')

    return (
      <>
        <Header />
        <SideBar />


        <UserComponent user_list={this.state.user.email} />





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
        this.setState({user: data})

       
      })
      .catch((err) => {
        this.setState({ error: err })
      })


  };

  componentDidMount() {
    this.getUserInfo()

  }
}
export default User;