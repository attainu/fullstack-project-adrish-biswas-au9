import React, { Component } from 'react';
import axios from 'axios';
import MovieComponent from '../components/MovieComponent';
const filmsUrl = 'https://studio-ghibli-universe-api.herokuapp.com/films';
const wishlist_url = 'https://studio-ghibli-universe-api.herokuapp.com/wishlist';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      id: this.props.match.params.id,
      in_wishlist: false,
      wishlist_movie_id: ''
    }
  }

  async getMovieDetails() {
    const { data: resp } = await axios.get(`${filmsUrl}/${this.props.match.params.id}`)
    this.setState({ movie: resp })
    axios.get(wishlist_url)
      .then((response) => {

        response.data.map((item) => {
          if (item.email === sessionStorage.getItem('email') && item.moviename === resp.title) {
            this.setState({ in_wishlist: true, wishlist_movie_id: item.id });
          }
        })
      })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
        {/* <Logout history={this.props.history} /> */}
        <MovieComponent moviedetails={this.state.movie} in_wishlist={this.state.in_wishlist} wishlist_movie_id={this.state.wishlist_movie_id} />
      </>
    )
  }
  componentDidMount() {
    this.getMovieDetails()
  }

}

export default Movie;