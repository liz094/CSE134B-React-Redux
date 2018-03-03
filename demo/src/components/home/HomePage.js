import React from 'react';
import {Link} from 'react-router';
import '../../styles/index.css';

let bg_img = "https://i.ytimg.com/vi/pugs6IiyOM4/maxresdefault.jpg";
let bgStyle = {
  backgroundImage: "url(" + bg_img + ")",
  top: 0,
  left: 0
};
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="first_line">
        <Link to="sign_in" className="login">Log In</Link>
          <Link to="sign_up" className = "signup">Sign Up</Link>
          <h1 style = {{textAlign: 'left'}}>Delivery</h1>
        </div>

        <div className="bg-container">
          <form action="/action_page.php" className="gradientColor">
          <p id="formheader">Enter Zip Code:</p>
          <input type="text" name="zipcode" />
          <Link to="cuisine" className="submitButton">Submit</Link>
          <br />
          </form>
        </div>

        <div className="footer">
          <Link to="about">About us</Link>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
    </div>
    );
  }
}

export default HomePage;
