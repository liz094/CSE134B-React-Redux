import React from 'react';
import {IndexLink, Link} from 'react-router';
import '../../styles/cart.css';
import CartList from './CartList';
import Total from './Total';
import Dish from './Dish';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dishes:[ {name: "Egg", price:"10.99", img: "https://i.stack.imgur.com/ZuAmS.jpg"}], price: "0"};
    }

    render() {
        return (
            <div>
            <div id="first_line_cart">
            <h1>
                <Link to= "restaurants" title="back" className="back">back</Link>
                Shopping Cart
                <span>
                <Link to="checkout.html" title="to check out" className="sign_up"> Check out</Link>
                </span>
            </h1>
            </div> 
            <div className="total" id="total" ref = "total">
                <Total price={this.state.price}/>
            </div>
            <div className="container_cart">
            <ul id="myUL">
                {alert (this.state.dishes[0].name)}
                <CartList dishList={this.state.dishes}/>
            </ul>
            </div>
            <div className="footer">
            <Link id="about_us" to="https://www.google.com"> About Us</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link id="contact" to="https://www.google.com"> Contact</Link>
            </div>
        </div>
        );
    }
}

export default Cart;
