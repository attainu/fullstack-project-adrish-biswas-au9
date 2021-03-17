// import React,{Component} from 'react';

// const url = "http://localhost:5000/api/auth/userinfo";

// class Logout extends Component{
//     constructor(){
//         super()

//         this.state={
//             user:'',
//             error:''
//         }
//     }

//     handleLogout=() => {
//         sessionStorage.removeItem('_ltk');
//         sessionStorage.removeItem('_rtk');
//         console.log(this, this.props)
//         this.props.history.push('/LoginComponent')
//     }

//     render(){
//         if(sessionStorage.getItem('_ltk') == null){
//             this.props.history.push('/LoginComponent')
//         }
//   return(
// <div>

//     <button className="btn btn-danger" onClick={this.handleLogout} style={{float:'right', backgroundColor: 'red'}}> Logout </button>
// </div>
//  )}}

// export default Logout;