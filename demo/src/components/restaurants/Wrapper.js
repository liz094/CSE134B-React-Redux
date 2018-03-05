import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Restaurant from "./Restaurant";

class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //arr: [{name: 1}, {name: 2}, {name: 3}]
        newpush: this.props.set,
        rArray: props.rArray
      };
  
    }
  
    render() {
      return (
        <div className="wrapper" id="rWrapper">
          {this.props.rArray.map(res => <Restaurant key = {res.key}/>)}
        </div>
      );
    }
  }

  Wrapper.propTypes = {
    set: PropTypes.string.isRequired,
    rArray: PropTypes.array.isRequired
};

export default Wrapper;
  