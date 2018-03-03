import React, {PropTypes} from 'react';
import Dish from './Dish';

const CartList = (props) => {
  return (
    <div>
      {props.dishList.map(dish=> <Dish key = {dish.name} {...dish} removeFunc={props.remove}/>)}
    </div>
  );
};

CartList.propTypes = {
  dishList: PropTypes.array.isRequired,
  remove: PropTypes.func
};
export default CartList;
