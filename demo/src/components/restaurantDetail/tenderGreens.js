import React from 'react';
import {Link} from 'react-router';

class tenderGreens extends React.Component {
    render() {
      return (

        <div>
        <div className="first_line">
          <h1>Delivery</h1>

          <Link to="sign_in" className="login">Log In</Link>
          <Link to="sign_up" className = "signup">Sign Up</Link>

        </div>

          <title> Tender Greens</title>

        </div>
      );
    }
  }
  
  export default tenderGreens;