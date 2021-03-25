import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeCharacterGridDisplay = (props) => {
    const display = (characterslist) => {
        if (characterslist) {
            const snippet=(characterslist.length > 3) ?
            (
                <div >See all</div>
            ) :
            (
                <div ></div>
            );
            if(characterslist.length === 0){
                return (
                    <div id="character_first" className='movie_poster_container'>
                       
                        <br/>
                        <div className="overlay">
                            Sorry; no matches found.
                        </div>
                    </div>
                )
            }
            return characterslist.map((item,index) => {
                const movieRoute ='/characters/'+item.id +'#top';
                
                if(index === 0){
                    return (
                        <div id="character_first" className='movie_poster_container'>
                            {snippet}
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>   
                        </div>
                    )
                }
                else{
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
        <div className="Home_sub_containers main">  
            <div className="container-fluid" >

                <div className="movie_grid">
                    {display(props.characterslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeCharacterGridDisplay;