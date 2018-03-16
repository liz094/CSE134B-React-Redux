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
            dish: {name: this.props.name, price: this.props.price, img: this.props.img, quantity: 1}
          };
        
          this.updateQuantity = this.updateQuantity.bind(this);
    }

    /** method to save a dish to cart by dispatching a save dish action */
    //TODO take amount as a parameter
    saveDishToStore(){
        /* For Debugging */
        const existingdishKey = this.props.dishes.findIndex(a => a.name == this.state.dish.name);
        if (existingdishKey==-1){
            this.props.actions.saveDish(this.state.dish).then(()=>toastr.success('Dish saved'));
        }
        else{
            this.state.dish.index = existingdishKey;
            this.props.actions.updateDish(this.state.dish).then(()=>toastr.success('Dish saved'));
        }
    }


    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
      }
    

    updateQuantity(event){
        /*
        this.setState((prevState) =>{
            dish: {prevState.name,prevState.price, prevState.img, event.target.value}
        });*/

        // const quantity = event.target.value ;
        // //+ dish[quantity];
        // console.log("quantity should now be"+quantity);
        let dish = Object.assign({},this.state.dish);
        let q = Number.parseInt(event.target.value);
        dish.quantity = q;   // add quantity number of dishes
        return this.setState({dish:dish});
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
                        <input type="text" name="amount" onChange = {this.updateQuantity}/>
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
    method: PropTypes.string
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