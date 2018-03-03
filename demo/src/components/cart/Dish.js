import React, {PropTypes} from 'react';

const Dish = (props) => {
    return (
        <li>
            <div id = {props.name} className = "selection_cart">
                <p> {props.name} </p>
                <img src ={props.img} alt="a picture of the product" />
                <div className = "quantity">
                    <form action="/action_page.php">
                        <div className = "removeItem">
                        <span> Quantity</span>
                        <input className = "removeInput" type="text" placeholder = "" name = "quantity" required /> 
                        <br />
                        <br />
                        <br />
                        <button onClick = {this.remove(this)}> remove </button>
                        </div>
                    </form>
                </div>
            <p className = "e1"> total price is {props.price}</p>
            </div>
        </li>
    );
};

export default Dish;
