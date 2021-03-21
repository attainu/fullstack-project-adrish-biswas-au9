
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

  logout=()=>{
    localStorage.removeItem('user')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('name')
    this.setState ({
      loggedIn: false
    })
    this.props.history.push('/')
  }
  render() {

    return (
      <div>
      {
        this.state.loggedIn &&
        <>
          
          <button className='btn' onClick={this.logout} style={{width:'95px', height:'46px', backgroundColor:'white', fontFamily:'Nora', color:'grey'}}><img alt ='g logo' src="https://img.icons8.com/small/16/000000/google-logo.png" style={{display:'inlineBlock', paddingRight:'3px'}}/>Logout</button>

        </>
      }
        {
          !this.state.loggedIn &&
          <GoogleLogin
          clientId="827339527611-lkbcb6n0msqjpbrhv0ldqskfqkvk6b2h.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        }
      </div>
    );
  }
}
export default withRouter(GoogleLoginN)

