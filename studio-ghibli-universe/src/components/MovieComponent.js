import React from 'react';
import './MovieComponent.css';
import VideoComponent from './VideoComponent'
import { HashLink } from 'react-router-hash-link';
const wishlist_url = 'https://studio-ghibli-universe-api.herokuapp.com/wishlist';


const MovieComponent = (props) => {


    const handleSubmit = () => {

        if (props.in_wishlist === true) {


            fetch(`${wishlist_url}/${props.wishlist_movie_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },


            });
            alert("Removed from wishlist!")
        }
        else {
            fetch(wishlist_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    id: Math.floor(Math.random() * 10000),
                    moviename: props.moviedetails.title,
                    movieid: props.moviedetails.id,
                    movieimage: props.moviedetails.image_url,
                    email: sessionStorage.getItem('email'),
                    username: sessionStorage.getItem('name'),
                    date: new Date().toDateString()
                })
                
            })
            alert("Added to wishlist!")
        }

    }


    const movie_info = ({ moviedetails }) => {
        if (moviedetails) {
            const object = (props.in_wishlist === false) ?
                (
                    <div style={{ filter: 'sepia()' }}><button type="button" class="btn" onClick={handleSubmit}><HashLink to='/home#Movies_heading'> <img alt='wishlist' src="https://img.icons8.com/cute-clipart/64/000000/wish-list.png"/></HashLink></button></div>
                ) :
                (
                    <div style={{  filter: 'grayscale()' }}><button type="button" class="btn" onClick={handleSubmit}><HashLink to='/home#Movies_heading'> <img alt='remove_from_wishlist' src="https://img.icons8.com/flat_round/64/000000/remove-document.png" /></HashLink></button></div>
                );

            return (
                <>
                    <div className='backgroundWall' style={{ backgroundImage: `url(${moviedetails.back_wall})` }} ></div>

                    <VideoComponent video={moviedetails.trailer_url} movie={moviedetails.video_url} />

                    



                    <div id="movie_page_navbar" className='container'>

                        <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#716944' }}>
                            <div className="col-xs-5 col-sm-6 col-lg-3">
                                <div ><img className='movie_banner' src={moviedetails.image_url} alt='movie_poster' style={{ border: '3px solid #716944 ' }}></img><br />
                                    <div style={{ textAlign: 'left' }}>{moviedetails.title}</div>
                                </div>

                            </div>

                            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                                <p>Directed by <b>{moviedetails.director} </b></p>
                                <hr style={{ backgroundColor: '#2b250f', height: '0.01px' }}></hr>
                                <div> {moviedetails.description}</div>
                                <br />
                                <small>
                                    Year of Production : <b> {moviedetails.release_date} </b>
                                Rotten Tomatoes score : <b> {moviedetails.rt_score} </b> <br />
                                Producer : <b> {moviedetails.producer} </b>
                                </small>
                                {object}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    const character_tile = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.char.map((item) => {
                const characterRoute = '/characters/' + item.id + '#top';
                return (
                    <>

                        <div className='movie_p_c '><HashLink to={characterRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center>{item.name}</center></div>


                    </>
                )
            })
        }
    }
    const location_tile = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.loc.map((item) => {
                const locationRoute = '/locations/' + item.id + '#top';
                return (
                    <>
                        <div className='movie_p_c'><HashLink to={locationRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center>{item.name}</center></div>

                    </>
                )
            })
        }
    }

    const vehicle_tile = (moviedetails) => {
        if (moviedetails) {
            if (moviedetails.veh.length > 0) {
                return moviedetails.veh.map((item) => {
                    const vehicleRoute = '/vehicles/' + item.id + '#top';
                    return (
                        <>
                            <div className='movie_p_c'><HashLink to={vehicleRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center>{item.name}</center></div>

                        </>
                    )
                })
            }

        }
    }
    const merch = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.video_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#716944' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    const collectables = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.merch_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#716944' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small><b>{item.name}</b></small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    return (
        <>
            <div>{movie_info(props)}</div>

            <div style={{ margin: '10px' }}>


                <div className="row" style={{ textAlign: 'center', padding: '15px', backgroundColor: '#2b250f' }}>
                    <div className="col-sm-2 movie_page_navigation"><a className = "movie_categories_link" href="#movie_page_character" ><h6>Characters</h6></a ></div>
                    <div className="col-sm-2 movie_page_navigation"><a className = "movie_categories_link" href="#movie_page_location"><h6>Locations</h6></a ></div>
                    <div className="col-sm-2 movie_page_navigation"><a className = "movie_categories_link" href="#movie_page_vehicle"><h6>Vehicles</h6></a ></div>
                    <div className="col-sm-2 movie_page_navigation"><a className = "movie_categories_link" href="#officialprdct"><h6>Official Products</h6></a ></div>
                    <div className="col-sm-2 movie_page_navigation"><a className = "movie_categories_link" href="#collectables"><h6>Collectables</h6></a ></div>

                </div>
            </div>


            <h4 id='movie_page_character' style={{ marginLeft: '20px', paddingTop:'80px'}}>Characters</h4>
            <hr style={{ backgroundColor: '#2b250f', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
            <div className="character_tile scrollmenu" >
                {character_tile(props.moviedetails)}

            </div><br/>
            <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#2b250f', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center>

            <div className="character_tile" >
                <h4 id='movie_page_location' style={{ marginLeft: '20px', paddingTop:'80px' }}>Locations</h4>
                <hr style={{ backgroundColor: '#2b250f', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {location_tile(props.moviedetails)}
                <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#2b250f', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center>
            </div>

            <div className="character_tile" id='movie_page_vehicle'>
                <h4 style={{ marginLeft: '20px', paddingTop:'80px' }}>Vehicles</h4>
                <hr style={{ backgroundColor: '#2b250f', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {vehicle_tile(props.moviedetails)}
                <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#2b250f', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center>
            </div>


            <div className="video_links" id="officialprdct" style={{ marginTop: '20px', paddingBottom: '30px', paddingTop:'80px',backgroundColor: '#2b250f' }}>
                <h4 style={{ backgroundColor: '#2b250f', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Official Products</h4>
                <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {merch(props.moviedetails)}
                <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#2b250f', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center>
            </div>

            <div className="video_links" id="collectables" style={{ paddingBottom: '30px',paddingTop:'80px', backgroundColor: '#2b250f' }}>
                <h4 style={{ backgroundColor: '#2b250f', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Collectables</h4>
                <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {collectables(props.moviedetails)}
                <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#2b250f', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center>
            </div>
        </>

    )
}
export default MovieComponent;