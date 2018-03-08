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
      {dishesToDisplay.map(dish=> <Dish key = {dish.name} {...dish} removeFunc={props.remove}/>)}
    </div>
  );
};

CartList.propTypes = {
  dishList: PropTypes.array.isRequired,
  remove: PropTypes.func
};
export default CartList;
