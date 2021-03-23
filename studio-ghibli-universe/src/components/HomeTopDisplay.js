import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import Slider from "react-slick";

var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HomeTopDisplay = (props) => {

    const slick = (filmslist) => {
        if (filmslist) {
            return filmslist.map((item) => {
                return (
                    <>
                        <div class='slider' style={{ width: '100%', height: 1300, backgroundImage: `url(${item.image_url})` }} >
                            <h3 id="HomeSlide1" >{item.title}</h3>
                            <br />
                            <h4 id="HomeSlide2">Slide to see matching movie images</h4>
                            <br />
                            <h6 id='Brought_to_you_by'>Brought to you by:</h6>
                            <br />
                            <div className='PresentedBy1'>
                                <img id="HomeImage1" src='./826333.png' alt='PresentedBy' />
                            </div>
                            <div className='PresentedBy2'>
                                <img id="HomeImage2" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png' alt='PresentedBy' />

                            </div>
                            <div id='HomeLogo'>
                                <img id="HomeImage3" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png' alt='logo' />
                                <p>Studio Ghibli Universe</p>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }
    return (
        <>
            <center class='slider_container main'>
                <Slider {...settings}>
                    {slick(props.filmslist)}
                </Slider>
            </center>
            <div className='HomeDescription main'>
                <center>
                <br/>
                    <h2>Studio Ghibli Universe</h2>
                    <h6>
                        One of the most acclaimed studios in the world.
                    </h6>
                    
                    <h6>
                        Studio Ghibli is the home of some of the most revered and beloved animated works to have ever graced the screen.
                    </h6>
                    

                    <h6>
                        The Studio Ghibli catalogue is now available to buy along with all it's merchandise of characters, vehicles, and iconic locations.
                    </h6>

                    <br/>
                </center>
            </div>
            <br />
        </>
    )
}

export default HomeTopDisplay;