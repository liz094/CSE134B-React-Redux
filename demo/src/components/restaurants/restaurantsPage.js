import React from 'react';
import {Link} from 'react-router';

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
                <img src="https://imgur.com/a/RQns6" alt="a picture of the restaurant" />
            </Link>
            <Link to="restaurantA">
                <p>Restaurant Name</p>
            </Link>
        </div>
      </div>
    );
  }
}

let restList = [1,1,1,1,1];

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //arr: [{name: 1}, {name: 2}, {name: 3}]
      newpush: this.props.set,
      rArray: props.rArray
    }

  }

  render() {
    return (
      <div className="wrapper" id="rWrapper">
        {this.props.rArray.map(res => <Restaurant/>)}
      </div>
    );
  }
}



class RestaurantsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rArray: [],
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
            <Wrapper set={this.state.newPush} rArray={this.state.rArray}/>
          </div>
          <div className="nextWrapper" style={{cursor: "pointer"}}>
              <div className="nextbutton" onClick={()=>{
                  // good testing point? Load 3 more restaurants
                  let newArray = this.state.rArray.concat([1,2,3]);
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