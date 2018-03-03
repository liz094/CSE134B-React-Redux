import React from 'react';
import {IndexLink, Link} from 'react-router';
import '../../styles/cart.css';
import CartList from './CartList';
import Total from './Total';
import Dish from './Dish';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dishes:[ {id: "1" ,name: "Backyard Steak Salad", price:"15.00", img: "https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F4eda44ff-839b-41dd-bf81-dc87cc649d70%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"},
                                { id: "2", name: "BGrilled Chicken Cobb Salad", price: "13.75", img: "https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fad668337-fe64-473f-82c3-cb1404425e52%2Forig.jpg&amp;quality=90&amp;w=0&amp;h=640&amp;mode=auto&amp;v=4"}]};
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
                <Total list={this.state.dishes}/>
            </div>
            <div className="container_cart">
            <ul id="myUL">
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
