import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import '../../styles/cart.css';
import CartList from './CartList';
import Total from './Total';
import Dish from './Dish';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cartActions from '../../actions/cartActions';
import toastr from 'toastr';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: this.props.dishes
        };
        this.remove = this.removeDish.bind(this);
    }

    removeDish(dish){
        this.props.actions.deleteDish(dish).then(()=>toastr.success('Dish deleted'));
    }

    render() {
        return (
            <div>
            <div id="first_line_cart">
            <h1>
                <Link to= "restaurants" title="back" className="back">back</Link>
                Shopping Cart
                <span>
                <Link to="checkout" title="to check out" className="sign_up"> Check out</Link>
                </span>
            </h1>
            </div> 
            <div className="total" id="total" ref = "total">
                <Total list={this.state.dishes}/>
            </div>
            <div className="container_cart">
            <ul id="myUL">
                <CartList dishList={this.state.dishes} remove={(dish)=>this.removeDish(dish)}/>
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

function mapStateToProps(state, ownProps) {
    return {
        dishes: state.dishes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
