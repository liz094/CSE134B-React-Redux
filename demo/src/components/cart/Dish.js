import React, {PropTypes} from 'react';

class Dish extends React.Component{
    constructor(props){
        super(props);
        alert('props.name is '+props.name);
    }

    render(){
    return (
        <li>
            <div id = {props.name} className = "selection_cart">
                <p> {props.name} </p>
                <img src ={props.img} alt="a picture of the product" />
                <div className = "quantity">
  
                        <div className = "removeItem">
                        <span> Quantity</span>
                        <p className = "removeInput"> {props.quantity} </p> 
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
    }// end of render
};

Dish.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    removeFunc:PropTypes.func
};

export default Dish;
