import React from 'react';
import './WishlistDisplay.css';
import { HashLink } from 'react-router-hash-link';

const wishlist_url = "https://studio-ghibli-universe-api.herokuapp.com/wishlist";


const WishlistDisplay = (props) => {
    const handleSubmit = (wishlist) => {
        fetch(`${wishlist_url}/${wishlist.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });
        alert("Removed from wishlist!")
    }
    const renderTable = ({ wishlist }) => {
        if (wishlist) {
            
                return wishlist.map((item) => {


                    const route = '/films/' + item.movieid + '#top'
                    return (
                        <>
                            <tr>
                                <td ><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></HashLink></td>
                                <td>{item.moviename}<br /><br /><HashLink to='/home#Movies_heading'><button className="btn" style={{ filter: 'sepia()' }} onClick={() => { handleSubmit(item) }}><img alt='delete_bin' src="https://img.icons8.com/fluent/48/000000/filled-trash.png" /></button></HashLink></td>
                                <td>{item.date}</td>
                            </tr>

                        </>

                    )




                })

            

        }
    }
    const object = (props.wishlist.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h4 >Add a movie to wishlist to make it a part of your Ghibli Universe!</h4>
                    </div>
                ):
                (<table className="table table-responsive">

                <thead>
                    <tr>

                        <th>Movie</th>
                        <th>Movie name</th>
                        <th>Date</th>
                    </tr>
                </thead>


                <tbody>

                    {renderTable(props)}


                </tbody>
            </table>)
    return (
        <div className="container" style={{paddingTop: '50px'}}>
            <h3 className='wishlist_heading'>{sessionStorage.getItem('name')}'s Ghibli Universe</h3>            
            {object}

        </div>

    )
}

export default WishlistDisplay;
