import React, {PropTypes} from 'react';
import Dish from './Dish';

let dishesToDisplay = [];

const CartList = (props) => {
  if(props.dishList === null) {
    dishesToDisplay = [];
  }
  else {
    dishesToDisplay = props.dishList;
  }
  return (
    <div>
<<<<<<< HEAD
      {dishesToDisplay.map(dish=> <Dish key = {dish.name} {...dish} removeFunc={props.remove} list={props.dishesToDisplay}/>)}
=======
      {dishesToDisplay.map(dish=> <Dish key = {dish.name} {...dish} removeFunc={props.remove}/>)}
>>>>>>> 514a4a5fd83ec2b293bbb404eec5fc8cbf2f1461
    </div>
  );
};

CartList.propTypes = {
  dishList: PropTypes.array.isRequired,
  remove: PropTypes.func
};
export default CartList;
