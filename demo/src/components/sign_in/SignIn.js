import React from 'react';
import {IndexLink, Link} from 'react-router';

class SignIn extends React.Component {
  render() {
    return (
        <div>
            <div id="first_line">
            <IndexLink to="/" title="back to main" className="back">Home</IndexLink>
                <Link to="sign_up" title="to sign up page" className="sign_up">No account? Sign Up!</Link>
            <h1 style={{textAlign: 'center'}}> Sign In</h1>
            </div>     
            <form className = "myForm" action="/action_page.php">
                <div className="container">
                    <div className = "margintop">
                        <p style={{color : 'black'}}>Please fill in this form to create an account.</p>
                        <hr/>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label style={{color : 'black'}}><b>Password</b></label>
                        
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <input type="checkbox"/> 
                        <label style={{color : 'black'}}> &nbsp;&nbsp;&nbsp;Remember Password</label>
                        <br></br>
                        <br></br>
                        <label><Link to="sign_up.html"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forget PassWord?</Link> </label>


                        <Link to="cuisine" type="submit" className = "submit">Log In</Link>
                    </div>
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