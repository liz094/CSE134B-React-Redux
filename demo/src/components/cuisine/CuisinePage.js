import React from 'react';
import "../../styles/cuisine.css";
import {IndexLink, Link} from 'react-router';
import CuisineStyle from './CuisineStyle';


class CuisinePage extends React.Component {
    render() {
      return (
        <div>
        <div id="header">
          <IndexLink to="/" title="back to main">Delivery</IndexLink>
            <div id="cartlogout">
                <p>
                    <Link to="cart" id="cart" title="back to main">Cart</Link>
                </p>
                <p>
                    <IndexLink to="/" id="log_out" title="back to main">Log Out</IndexLink>
                </p>
            </div>
        </div>
        <div id="categoryHeading" style={{margin: "0 0 0 0"}}>
            <p id="back" style={{margin: "0 0 0 0"}}>
              <Link to="/" style={{margin: "0 0 0 0"}}>Back</Link>
            </p>
            <p id="headingMessage" style={{margin: "0 0 0 0"}}>Cuisine</p>
        </div>
        <div id="selections">
            <div className="wrapper">
                <CuisineStyle type="American"/>
                <CuisineStyle type="Chinese"/>
                <CuisineStyle type="Mexican"/>
                <CuisineStyle type="Japanese"/>
                <CuisineStyle type="Korean"/>
            </div>
        </div>
        <div className="nextWrapper">
            <div className="nextbutton">
                <p>
                    <Link to="restaurants" >&darr;</Link>
                </p>
            </div>
        </div>
        <div className="footer">
            <a id="about_us" href="https://www.google.com"> About Us</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a id="contact" href="https://www.google.com"> Contact</a>
        </div>
    </div>
      );
    }
  }
  
  export default CuisinePage;