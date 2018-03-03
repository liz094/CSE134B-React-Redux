import React, {PropTypes} from 'react';

const Total = (price) => {
    return (        
        <div>
        <p id = "subtotoal">Subtotal: $ {price}</p>
        <p id = "estTax"> Estimated Tax: ${price * 0.075} </p>
        <p id = "deliv"> Delivert Fee: $5.00 </p> 
        <p id = "estTotal"> <b>Estimated Total:     ${price*1.075} </b></p>   
        </div>  
    );
};

export default Total;
