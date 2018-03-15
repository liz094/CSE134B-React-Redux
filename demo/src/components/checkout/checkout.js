import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import "../../styles/checkout.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cartActions from '../../actions/cartActions';
import Total from '../cart/Total';



export class CheckoutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: this.props.dishes
        };
    }

/*
remove(id){

    let i = parseInt(id);
    let msg_boxes = document.getElementById("msg_boxes");
    let child = document.getElementById(id);
    msg_boxes.removeChild(child);

}*/

    render() {
      return (
          <div>
            <title> Checkout</title>


<div id="headerR">
    <IndexLink to ="/" className = "logo">DejaDelivery</IndexLink>
    <div id="cartlogout">
         <script >
            showCartNum();
        </script>
        <p>
        <IndexLink to ="/" id="log_out">Log Out</IndexLink>
        </p>
    </div>
</div>

             <div id="categoryHeadingR">
            <p>
                {
                <Link to ="cart" >Back</Link>
                }
            </p>
            
            <h1 className="page_heading">Checkout</h1>
        </div>

        <div className="address">
            <div className="block_heading" >
                <p>Delivery Address</p>
            </div>
            <form className="delivery_address">
            Address line 1:
                <input type="text" name="address1"/>
                <br/>
                Address line 2:
                <input type="text" name="address2"/>
                <br/>
                City:
                <input type="text" name="city"/>
                <br/>
                Zip code:
                <input type="text" name="zip"/>
                <br/>
            </form>
        </div>


        <div className="total" id="total" ref = "total">
            <Total list={this.state.dishes}/>
        </div>
{/*
        <div className="total">
            <p> Subtotal: $17.00</p>
            <p> Estimated Tax:$1.32</p>
            <p> Delivery:$5.00</p>
            <p> </p>
            <p className="est.total"> <b>Estimated Total:     $23.32</b></p>
        </div>
        */}

        <div className="paymentInfo">
            <div className="block_heading" >
                <p>Payment Info </p>
            </div>
            <form id = "payment_info">
            <input type="radio" name="paymentMethod" value="credit" checked/>Credit
                <br/>
                Card Number:
                <input type="text" name="cardNumber"/>
                <br/>
                Expiry Date:
                <select name="month">
                    <option value="january">01</option>
                    <option value="february">02</option>
                    <option value="march">03</option>
                    <option value="april">04</option>
                    <option value="may">05</option>
                    <option value="june">06</option>
                    <option value="july">07</option>
                    <option value="august">08</option>
                    <option value="september">09</option>
                    <option value="october">10</option>
                    <option value="november">11</option>
                    <option value="december">12</option>
                </select>
                <select name="year">
                    <option value="year0">2018</option>
                    <option value="year1">2019</option>
                    <option value="year2">2020</option>
                    <option value="year3">2021</option>
                    <option value="year4">2022</option>
                    <option value="year5">2023</option>
                </select>
                <br/>
                Verification Number:
                <input type="text" name="verificationNumber"/>
                What's this?
                <br/>
                <input type="radio" name="paymentMethod" value="paypal"/>Paypal
            </form>
        </div>

        <div>
            <p>
                <Link to ="progress" className="submitC">Submit</Link>
            </p>
        </div>

        <div className="footer">
            <a id="about_us" href="https://www.google.com"> About Us</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a id="contact" href="https://www.google.com"> Contact</a>
        </div>


          </div>

      );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        dishes: state.dishes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    };
  }

  CheckoutPage.propTypes={
    dishes : PropTypes.array.isRequired
  }

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);

