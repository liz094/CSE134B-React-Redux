import React, {PropTypes} from 'react';

const Dish = (props) => {
    return (
        <li>
            <div id = {props.name} className = "selection_cart">
                <p> {props.name} </p>
                <img src ={props.img} alt="a picture of the product" />
                <div className = "quantity">
  
                        <div className = "removeItem">
                        <span> Quantity</span>
                        <input className = "removeInput" type="text" placeholder = "" name = "quantity"  /> 
                        <br />
                        <br />
                        <br />
                        <button onClick = {()=> props.removeFunc(props.name)}> remove </button>
                        </div>
      
                </div>
            <p className = "e1"> {"total price is $"+ props.price}</p>
            </div>
        </li>
    );
};

Dish.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    removeFunc:PropTypes.func
};

export default Dish;
