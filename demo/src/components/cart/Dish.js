import React, {PropTypes} from 'react';

class Dish extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    return (
        <li>
            <div id = {this.props.name} className = "selection_cart">
                <p> {this.props.name} </p>
                <img src ={this.props.img} alt="a picture of the product" />
                <div className = "quantity">
  
                        <div className = "removeItem">
                        <span> Quantity : </span>
                        <p className = "removeInput"> {this.props.quantity} </p> 
                        <br />
                        <br />
                        <br />
                        <button onClick = {()=> this.props.removeFunc(this.props)}> remove </button>
                        </div>
      
                </div>
            <p className = "e1"> {"total price is $"+ this.props.price}</p>
            </div>
        </li>
    );
    }// end of render
}

Dish.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    removeFunc:PropTypes.func
};

export default Dish;
