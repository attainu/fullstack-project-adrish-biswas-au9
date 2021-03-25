import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import DvdComponent from '../components/DvdComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const dvd_url = 'https://ghibli-json-server.herokuapp.com/dvd';


class Dvd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dvd: '',
      id: this.props.match.params.id
    }
  }

  async getDvdDetails() {
    const { data: resp } = await axios.get(`${dvd_url}/${this.props.match.params.id}`)
    this.setState({ dvd: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <DvdComponent dvddetails={this.state.dvd} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getDvdDetails()
  }

}

export default Dvd;