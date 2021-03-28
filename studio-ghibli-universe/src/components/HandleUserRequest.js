import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";

const HandleUserRequest = (props) => {
  const logout = () => {
    
  }
  return (
    <>

      {
          props.pending_check == true ?
          <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }}><h6>Pending request...</h6>
            <span className="sr-only">(current)</span>
          </button>
          :
          this.state.allow_button ?
            <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }} onClick={this.handleGhiblian}><h6>Become a Ghiblian!</h6>
              <span className="sr-only">(current)</span>
            </button> :

            <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }}><h6>Pending request...</h6>
              <span className="sr-only">(current)</span>
            </button>

      }

    </>
  )
}

export default HandleUserRequest;