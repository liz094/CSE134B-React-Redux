import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../styles/restaurantDetail.css';
import Dish from '../cart/Dish';
import * as cartActions from '../../actions/cartActions';
import toastr from 'toastr';

// for the dishes
let key = 0;

class ManageRestaurantDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: {name: this.props.name, price: this.props.price, img: this.props.img, quantity: this.props.quantity}
          };
    }

    /** method to save a dish to cart by dispatching a save dish action */
    //TODO take amount as a parameter
    saveDishToStore(){
        /* For Debugging */
        console.log("Before Adding: ");
        for(let i=0; i< this.props.dishes.length;i++){
            console.log(this.props.dishes[i]);
        }
        console.log("~~~~~~~~~~~~~~~~~~");

        this.props.actions.saveDish(this.state.dish).then(()=>toastr.success('Dish saved'));
}


    render() {
        return (
            <div className="selectionR">
                <div className="itemInfoR">
                    <img className="food_image" src={this.props.img} alt="a picture of the product" width="300" height="230" />
                    <p><b>{this.props.name}</b></p>
                    <p>${this.props.price}</p>
                    <form className="amount">
                        Amount:<br />
                        <input type="text" name="amount" />
                        <br />
                    </form>
                    <button onClick={()=>this.saveDishToStore()}
                        className="button_orange" > add to cart </button>
                </div>
            </div>
        );
    }
}

ManageRestaurantDetailPage.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    method: PropTypes.string,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageRestaurantDetailPage);