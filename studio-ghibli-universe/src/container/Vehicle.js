import React, { Component } from 'react';

import axios from 'axios';
import Logout from './Logout';
import VehicleComponent from '../components/VehicleComponent';
import VideoComponent from '../components/VideoComponent'
const vehicle_url = 'https://studio-ghibli-universe-api.herokuapp.com/vehicles';


class Vehicle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicle: '',
      id: this.props.match.params.id
    }
  }

  async getVehicleDetails() {
    const { data: resp } = await axios.get(`${vehicle_url}/${this.props.match.params.id}`)
    this.setState({ vehicle: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
        {/* <Logout history={this.props.history} /> */}
        <VehicleComponent vehicledetails={this.state.vehicle} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getVehicleDetails()
  }

}

export default Vehicle;