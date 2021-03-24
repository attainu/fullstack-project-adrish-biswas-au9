import React from 'react'
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import {Route} from 'react-router-dom'
import Home from './container/Home'
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';

import Movie from './container/Movie';
import Character from './container/Character';
import Location from './container/Location';
import Vehicle from './container/Vehicle';
import Wishlist from './container/Wishlist';
import SideBar from './components/SideBar';
import Shopping from './container/Shopping'

const Routing = () => {
    return (
        <BrowserRouter>
          
          

          <Route exact path='/' component={SignupComponent} />
          <Route path='/logincomponent' component={LoginComponent}/>
          <Route path="/home" component={Home}/>
          <Route path="/films/:id" component={Movie}/>
          <Route path="/characters/:id" component={Character}/>
          <Route path="/locations/:id" component={Location}/>
          <Route path="/vehicles/:id" component={Vehicle}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/shopping" component={Shopping}/>
          <Footer />
        </BrowserRouter>
    );
  }

export default Routing;
