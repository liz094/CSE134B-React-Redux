import React from 'react';
import {Link} from 'react-router';

class Restaurant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null
      };
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
export default Restaurant;