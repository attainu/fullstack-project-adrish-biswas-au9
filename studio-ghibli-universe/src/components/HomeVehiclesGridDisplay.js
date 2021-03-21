import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeVehiclesGridDisplay = (props) => {
    const display = (vehicleslist) => {
        if (vehicleslist) {
            const snippet=(vehicleslist.length > 4) ?
            (
                <div >Slide the horizontal scroll bar to see the entire list.</div>
            ) :
            (
                <div ></div>
            );
            if (vehicleslist.length === 0) {
                return (
                    <div id="vehicles_first" className='movie_poster_container'>
                        <br />
                        <div className="overlay">
                            Sorry; no matches found.
                            </div>

                    </div>
                )
            }
            return vehicleslist.map((item, index) => {
                const movieRoute = '/vehicles/' + item.id + '#top';
                if (index === 0) {
                    return (
                        <div id="vehicles_first" className='movie_poster_container'>
                            {snippet}
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                            <div className="overlay">
                            </div>

                        </div>
                    )
                }
                else {
                    return (
                        <div className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                        </div>
                    )
                }

            })
        }
    }

    return (
        <div className="Home_sub_containers">
            <div className="container" >
                <div className="movie_grid">
                    {display(props.vehicleslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeVehiclesGridDisplay;