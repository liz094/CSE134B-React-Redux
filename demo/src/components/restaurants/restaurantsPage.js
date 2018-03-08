import React from 'react';
import {Link} from 'react-router';
import Restaurant from "./Restaurant";
import Wrapper from "./Wrapper";

let key =3;

class RestaurantsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rArray: [{key: 0},{key: 1},{key: 2}],
        newPush: false
      };

      this.renderMoreRests = this.renderMoreRests.bind(this);

    }

    handleClick() {
      this.setState({newPush: true});
      this.setState({newPush: false});
    }

    // generate a new array with another restaurant added
    renderMoreRests(rArray) {
      return rArray.push(<Restaurant/>);
    }

    render() {
      return (
        <div>
          <div id="header">
              <Link to="/">Delivery</Link>
              <div id="cartlogout">
                  <p>
                    <Link to="cart" id="cart">Cart</Link>
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
            <Wrapper set={"IDK whatever"} rArray={this.state.rArray}/>
          </div>
          <div className="nextWrapper" style={{cursor: "pointer"}}>
              <div className="nextbutton" onClick={()=>{
                  // good testing point? Load 3 more restaurants
                  let newArray = this.state.rArray.concat([{key: key++}, {key: key++}, {key: key++}]);
                  this.setState({rArray: newArray, newpush: false});
                }}>
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