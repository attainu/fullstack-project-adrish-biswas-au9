
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login'
import { withRouter } from "react-router";
import { Link, Redirect } from "react-router-dom";

class GoogleLoginN extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      email: "", 
      name: ""

    }
  }
  componentDidMount(){
    const user = localStorage.getItem('user');
    if(user){
      this.setState({
        loggedIn: true
        
      });
      this.props.history.push('/home');
    }
  }
  responseGoogle = (response) => {
    try {
      console.log(response, 'props');
      if (!response || !response.accessToken) { 
        alert("sorry, login failed")
        return;
      }
      this.setState ({
        email: response.profileObj.email,
        name: response.profileObj.givenName,
        loggedIn: true
      })
      const user = {
        token: response.accessToken,
        name: response.profileObj,
      }
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem("isloggedin", true);
      sessionStorage.setItem('email', this.state.email);
      sessionStorage.setItem('name', this.state.name);
      
      
      
      this.props.history.push('/home')
    } catch (error) {
      console.log('this is error', error)
    }
  }

  
  render() {

    return (
      <div>
      
        
          {/* !this.state.loggedIn && */}
          <GoogleLogin
          clientId="827339527611-lkbcb6n0msqjpbrhv0ldqskfqkvk6b2h.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        
      </div>
    );
  }
}
export default withRouter(GoogleLoginN)