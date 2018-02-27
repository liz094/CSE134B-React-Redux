import React from 'react';
import {Link} from 'react-router';

class SignIn extends React.Component {
  render() {
    return (
        <div>
            <div id="first_line">
            <h1 style={{textAlign: 'center'}}> Sign In
                <Link to="Index" title="back to main" className="back">Home</Link>
                <Link to="SignUp" title="to sign up page" className="sign_up">No account? Sign Up!</Link>
            </h1>
            </div>     
            <form className="container" action="/action_page.php">
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label style={{color : 'white'}}><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <label><Link to="sign_up.html"> Forget PassWord?</Link> </label>
                <Link to="location.href='cuisine.html';" type="submit">Login</Link>
            </div>
            </form>
            <div className="footer">
            <Link to ="www.google.com" id="about_us" > About Us</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="..." id="contact" > Contact</Link>
            </div>
        </div>
    );
  }
}

export default SignIn;