import React, { Component } from 'react';
import './LocationComponent.css';
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';

const Dvd_info = ({ dvddetails }) => {
  // console.log(props, "blu2")

  //   console.log(props, "blu3")


  return (
    <>

      {/* <div className='container'>
        <div class="row">
          <div class="col-sm-4">col-sm-8</div>
          <div class="col-sm-8">col-sm-4</div>
        </div> */}

        <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
          <div className="col-xs-5 col-sm-6 col-lg-3">
            <img className='location_banner' src={dvddetails.image_url} alt='Dvd_poster' style={{ border: '3px solid #1daeed ' }}></img></div>
            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
              <h2>{dvddetails.name}</h2><small>(A STUDIO GHIBLI PRODUCT)</small><br/><br/><br/><a href={dvddetails.merch_link} className="btn btn-primary">Buy Now</a></div>
            </div>
          
        
      {/* </div> */}
    </>
  )


  // console.log("props")
}
const DvdComponent = (props) => {

  console.log(props, "props passed blu")
  return (
    <>
      <div className='main'> {Dvd_info(props)}</div>

    </>
  )
}

export default DvdComponent;