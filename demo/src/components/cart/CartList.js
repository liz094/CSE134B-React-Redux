import React, {PropTypes} from 'react';
import Dish from './Dish';

const CartList = ({dishList}) => {
  return (
    <div>
        <Dish name = {dishList[0].name} price = {dishList[0].price} img={dishList[0].img} />
    </div>
  );
};

CartList.propTypes = {
  dishList: PropTypes.array.isRequired
};
export default CartList;
