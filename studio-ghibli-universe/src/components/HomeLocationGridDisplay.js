import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeLocationGridDisplay = (props) => {
    const display = (locationslist) => {
        if (locationslist) {
            const snippet=(locationslist.length > 4) ?
            (
                <div >Slide the horizontal scroll bar to see the entire list.</div>
            ) :
            (
                <div ></div>
            );
            if(locationslist.length === 0){
                    return (
                        <div id="location_first" className='movie_poster_container'>
                            <br/>
                            <div className="overlay">
                                Sorry; no matches found.
                            </div>
                           
                        </div>
                    )
            }
            return locationslist.map((item,index) => {
                const movieRoute = '/locations/' + item.id + '#top';
                if(index === 0){
                    return (
                        <div id="location_first" className='movie_poster_container'>
                            {snippet}
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url[0]} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                           
                        </div>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url[0]} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                        </div>
                    )
                }
                
            })
        }
    }

    return (
        <div className="Home_sub_containers main">
            <div className="container" >
                <div className="movie_grid">
                    {display(props.locationslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeLocationGridDisplay;