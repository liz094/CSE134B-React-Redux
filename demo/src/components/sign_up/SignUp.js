import React from 'react';
import {IndexLink, Link} from 'react-router';
import '../../styles/sign_up.css';



class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div id="first_line" >
          <IndexLink to="/" title="back to main" className="back">Home</IndexLink>
          <Link to="sign_in" title="to sign in page" className="sign_in">Log In</Link>
          <h1 style = {{textAlign: 'center'}}> Sign Up </h1>
          </div>
          <p className="already"> Already have an account? </p>

        <form className = "myForm" action="/action.page.php" >
          <div className="container">
          <div className = "margintop">
            <p style={{color : 'black'}}>Please fill in this form to create an account.</p>
            <hr/>
         
            <label style={{color : 'black'}}><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
            <label style={{color : 'black'}}><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <label style={{color : 'black'}}><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <label style={{color : 'black'}}>
            <input type="checkbox" defaultChecked="checked" style={{marginBottom: 15}} /> Remember me
            </label>
            <p style={{color : 'gray'}}>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms and Privacy</a>.</p>
            <div className="clearfix">
              <IndexLink type="button" to= "/" className="cancelbtn">Cancel</IndexLink>
              <Link type="submit" to="cuisine" className="signupbtn">Sign Up</Link>
            </div>
            <hr/>
            </div>
          </div>
        </form>

        <div className="footer">
          <Link id="about_us" to="https://www.google.com"> About Us</Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link id="contact" to="https://www.google.com"> Contact</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUp;