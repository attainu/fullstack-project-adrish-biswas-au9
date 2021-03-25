import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeMovieGridDisplay = (props) => {
    
    const display = (filmslist) => {
        
        if (filmslist) {
            const snippet=(filmslist.length > 3) ?
            (
                <div >See all</div>
            ) :
            (
                <div ></div>
            );
            if (filmslist.length === 0) {
                return (
                    <div id="movie_first" className='movie_poster_container'>
                        <br />
                        <div className="overlay">
                            Sorry; no matches found. 
                        </div>
                    </div>
                )
            }
            return filmslist.map((item, index) => {
                

                const movieRoute = '/films/' + item.id + '#top';
                
                    if (index === 0) {
                        return (
                            <>
                                
                                <div id="movie_first" className='movie_poster_container'>
                                {snippet}
                                    <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img></HashLink>
                                    <br />
                                    <center>{item.title}</center>
                                </div>
                            </>
                        )
                    }
                    else {
                        return (
                            <div className='movie_poster_container'>
                                <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                                <center>{item.title}</center>
                            </div>
                        )
                    }
                    
                

            })
        }

    }

    return (
        <div className="Home_sub_containers main">
            <div className="container-fluid" >
               

                <div className="movie_grid">
                    {display(props.filmslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeMovieGridDisplay;