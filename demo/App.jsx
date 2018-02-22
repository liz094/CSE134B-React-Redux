import React from 'react';
let imgUrl = "https://i.ytimg.com/vi/pugs6IiyOM4/maxresdefault.jpg";
let sectionStyle = {
    backgroundImage: "url(" + imgUrl + ")",
    height: 500,
    width: 500
};
class App extends React.Component {

   render() {
      return (
         <div>
             <div className="first_line">
                  <h1> <b>Delivery</b>
                  <a href="sign_in.html" className = "login">Log In</a>
                  <a href="sign_up.html" className = "signup">Sign Up</a>
                  </h1>
              </div>
              <div className="bg-container" style = {sectionStyle}>
                  <form action="/action_page.php">
                      <p id="formheader">Enter Zip Code:</p>
                      <input type="text" name="zipcode" />
                      <a href="cuisine.html" className="button">Submit</a>
                      <br />
                  </form>
              </div>

              <div className="footer">
                  <a id="about_us" href="www.google.com"> About Us</a>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <a id="contact" href="..."> Contact</a>
              </div>

         </div>
      );
   }
}
export default App;
