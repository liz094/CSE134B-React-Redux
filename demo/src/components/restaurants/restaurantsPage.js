import React from 'react';
import {Link} from 'react-router';

class RestaurantsPage extends React.Component {
    render() {
      return (
          <div>
          <title> cuisine types</title>
          <Link to="restaurantA">Tender Greens</Link>
        </div>
      );
    }
  }
  
  export default RestaurantsPage;