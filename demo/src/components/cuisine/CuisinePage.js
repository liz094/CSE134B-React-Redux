import React from 'react';
import {Link} from 'react-router';

class CuisinePage extends React.Component {
    render() {
      return (
          <div>
          <title> cuisine types</title>
          <Link to="restaurants">Restaurants</Link>
        </div>
      );
    }
  }
  
  export default CuisinePage;