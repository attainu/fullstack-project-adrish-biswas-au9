import React, { Component } from 'react';
import './WatchlistlistDisplay.css';
import { connect } from 'react-redux';
import { wishlist_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';

//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";

class WatchlistDisplay extends Component {
    handleSubmit = (wishlist) => {
        this.props.dispatch(wishlist_delete(wishlist))
        // fetch(`${wishlist_url}/${wishlist.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // });
        alert("Removed from wishlist!")
    }
    renderTable = ({ wishlist }) => {
        if (wishlist) {

            return wishlist.map((item) => {


                const route = '/films/' + item.movieid + '#top'
                return (
                    <>
                        <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693', padding:'5px' }}>
                        <div className="row no-gutters">

                        <div className="col-md-3">
                            <center><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></HashLink></center>
                            </div>


                            <div className="col-md-3" style={{paddingTop:'80px'}}>
                            <center><h6>{item.moviename}</h6></center>
                            </div>
                            
                            
                            <div className="col-md-3" style={{paddingTop:'80px'}}>
                            <center><h6>{item.date}</h6></center>
                            </div>


                            <div className="col-md-3" style={{paddingTop:'50px'}}>
                            <center><button className="btn" onClick={() => { this.handleSubmit(item) }}><img alt='delete_bin' src="https://img.icons8.com/fluent/48/000000/filled-trash.png" /></button></center>
                            </div>


                            


                            

                        </div></div>

                    </>






                )




            })



        }
    }

    render() {
        let object = (<div></div>)
        if (this.props.wishlist) {
            object = (this.props.wishlist.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h5 style={{color:'wheat'}}>Add a movie to wishlist to make it a part of your Ghibli Universe!</h5>
                    </div>
                ) :
                (                <>
                    <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#1daeed', padding:'10px' }}>
                    <div className="row no-gutters">
                      <div className="col-md-3">
    
                      <center>Movie</center>     
                        </div>
    
                        <div className="col-md-3">
    
    
                               <center>Movie name</center> 
    
                        </div>
    
                        <div className="col-md-3">
    
    
                                
                                <center>Date</center> 
    
                        </div>
    
                        <div className="col-md-3">
    
    
                        <center>Delete</center> 
    
                        </div>
    
    
    
                        </div>
    
    
                        
                    </div><div>
    
    {this.renderTable(this.props)}
    
    
    </div>
    </>)
        }

        return (
            <div className="container" id="watchlist_display" style={{ paddingTop: '100px' }}>
                <h4 style={{color:'#1daeed'}} className='wishlist_heading'>{sessionStorage.getItem('name')}'s Watchlist</h4>
                { object }
            </div >
            
        )
    }

}

export default connect()(WatchlistDisplay);