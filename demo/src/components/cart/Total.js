import React, {PropTypes} from 'react';

const Total = ({list}) => {
    let i =0;
    let price =0;
    for (i =0; i< list.length; i++){
        price += parseFloat(list[i].price);
    }
    return (        
        <div>
        <p id = "subtotoal"> {"Subtotal:$ " + price.toFixed(2)} </p>
        <p id = "estTax"> {"Estimated Tax:$ " + (price * 0.075).toFixed(2)} </p>
        <p id = "deliv"> {"Delivert Fee: $5.00 "}</p> 
        <p id = "estTotal"> <b> {"Estimated Total:     $" + (price*1.075).toFixed(2)} </b></p>   
        </div>  
    );
};

Total.propTypes = {
    list: PropTypes.array.isRequired
};
export default Total;
