import React from 'react';
import {Link} from 'react-router';
import resImg from "../../img/whitecake.svg";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <div className="selection">
        <div className="itemInfo">
            <Link to="restaurantA">
                <img src={resImg} alt="a picture of the restaurant" />
            </Link>
            <Link to="restaurantA">
                <p>Restaurant Name</p>
            </Link>
        </div>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <div className="wrapper" id="rWrapper">
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
  </div>
    );
  }
}

class RestaurantsPage extends React.Component {
    renderMoreRests(n) {
      return <Restaurant />
    }

    render() {
      return (
        <div>
          <div id="header">
              <Link to="/">Delivery</Link>
              <div id="cartlogout">
                  <p>
                    <Link to="/" id="cart">Cart</Link>
                  </p>
                  <p>
                    <Link to="/" id="log_out">Log Out</Link>
                  </p>
              </div>
          </div>

          <div id="categoryHeading">
              <p id="back" style={{margin: "0 0 0 0"}}>
                  <Link to="cuisine">Back</Link>
              </p>
              <p id="headingMessage" style={{margin: "0px 0px -10px 0px"}}>Restaurants:</p>
          </div>
          <div id="selections" style={{margin: "20 0 0 0"}}>
            <Wrapper />
          </div>
          <div className="nextWrapper" onclick="displayRestaurantsHard()" style={{cursor: "pointer"}}>
              <div className="nextbutton">
                  <p onClick={() => this.renderMoreRests()}>
                      &darr;
                  </p>
              </div>
          </div>
          <div className="footer">
              <a id="about_us" href="www.google.com"> About Us</a>

              <a id="contact" href="..."> Contact</a>
          </div>
        </div>
      );
    }
  }
  
  export default RestaurantsPage;