import React from 'react';
import {Link} from 'react-router';

class RestaurantsPage extends React.Component {
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
              <div className="wrapper" id="rWrapper">
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Bizzare China</p>
                          </Link>
                      </div>
                  </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Tender Greens</p>
                          </Link>
                      </div>            </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant C</p>
                          </Link>
                      </div>
                  </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant D</p>
                          </Link>
                      </div>            
                  </div>
                              <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant E</p>
                          </Link>
                      </div>
                  </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant F</p>
                          </Link>
                      </div>            </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant G</p>
                          </Link>
                      </div>
                  </div>
                  <div className="selection">
                      <div className="itemInfo">
                          <Link to="restaurantA">
                              <img src="https://wallpapercave.com/cute-cupcake-background" alt="a picture of the restaurant" />
                          </Link>
                          <Link to="restaurantA">
                              <p>Restaurant H</p>
                          </Link>
                      </div>            
                  </div>
              </div>
          </div>
          <div className="nextWrapper" onClick="displayRestaurantsHard()" style={{cursor: "pointer"}}>
              <div className="nextbutton">
                  <p>
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