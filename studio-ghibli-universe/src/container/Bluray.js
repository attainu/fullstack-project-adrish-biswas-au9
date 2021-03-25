import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import BlurayComponent from '../components/BlurayComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const blu_ray_url = 'https://ghibli-json-server.herokuapp.com/blu_ray';


class Bluray extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blu_ray: '',
      id: this.props.match.params.id
    }
  }

  async getBlurayDetails() {
    const { data: resp } = await axios.get(`${blu_ray_url}/${this.props.match.params.id}`)
    this.setState({ blu_ray: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <BlurayComponent blu_raydetails={this.state.blu_ray} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getBlurayDetails()
  }

}

export default Bluray;