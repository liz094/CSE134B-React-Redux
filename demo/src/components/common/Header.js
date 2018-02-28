import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div id="header">
    <a href="./Main.html">
        <b>Delivery</b>      
    </a>
    <div id="cartlogout">
        <p>
            <a href="./cart.html" id="cart">Cart (0)</a>
        </p>
        <p>
            <a href="./Main.html" id="log_out">Log Out</a>
        </p>
    </div>
</div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
