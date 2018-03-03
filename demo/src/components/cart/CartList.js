import React, {PropTypes} from 'react';
import Dish from './Dish';

const CartList = (list) => {
  return (
    <div>
        <Dish name = {list[0].name} price = {list[0].price} img = {list[0].img} />
        {/* {list.map(dish => <Dish {...dish} />)} */}
    </div>
  );
};

export default CartList;
