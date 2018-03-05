import React from 'react';
import {Link,IndexLink} from 'react-router';
import '../../styles/restaurantDetail.css';
import Entry from "./Entry"
//import {dish} from '../../scripts/cart.js';


let logoStyle = {

    font: 'Seaweed Script',
    size: 30
};

/* Personal reference:
        <Entry 
            img=""
            name="" 
            price="" 
            method=""/>
*/

class tenderGreens extends React.Component {
    render() {
      return (

        <div>
            <title> Tender Greens</title>

            <Link to ="checkout">Checkout</Link>

            <div id="headerR">
                <IndexLink to ="/" className = "logo">DejaDelivery</IndexLink>
                <div id="cartlogout">
                     <script >
                        
                    </script>
                    <p>
                    <IndexLink to ="/" id="log_out">Log Out</IndexLink>
                    </p>
                </div>
            </div>

            <div id="categoryHeadingR">
            <p>
                <Link to ="restaurants" >Back</Link>
            </p>
            </div>

             <div id="tenderGreens">
                <p> Tender Greens </p>
            </div>
            <div className="menuHeadingR">
                <p>Salads</p>
            </div>

        <div className="selectionsR">
        <div className="wrapperR">
            <Entry 
                img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F4eda44ff-839b-41dd-bf81-dc87cc649d70%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4" 
                name="Backyard Steak Salad" 
                price="15.00" 
                method=""/>
            <Entry 
                img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fad668337-fe64-473f-82c3-cb1404425e52%2Forig.jpg&amp;quality=90&amp;w=0&amp;h=640&amp;mode=auto&amp;v=4"
                name="BGrilled Chicken Cobb Salad" 
                price="13.75" 
                method=""/>
            <Entry 
                img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fd691acb3-c673-4b69-962c-d5257c4286b0%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
                name="Chinese Chicken Salad" 
                price="13.75" 
                method=""/>
            <Entry 
                img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F2eddf82b-b84d-4043-aca8-80bde5f354ee%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
                name="Happy Vegan Salad" 
                price="13.75" 
                method=""/>
        </div>
    </div>

      <div className="menuHeadingR">
        <p>
            Plates
        </p>
    </div>

    <div className="selectionsR">
        <div className="wrapperR">
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Ff2b8dc5a-90b5-4bdf-9edc-e785e652d7ab%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Fried Chicken Plate" 
            price="15.75" 
            method=""/>
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F72b92ba0-d830-44c6-b7ab-ddd71e1ff9b5%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Salt and Pepper Chicken Plate" 
            price="13.20" 
            method=""/>
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F4a51db22-e92e-4cf4-9043-8c57338d0797%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Falafel Plate" 
            price="12.65" 
            method=""/>
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fa1dea3b6-accb-4b8d-b2a2-84babd271987%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Herb Brushed Tuna Plate" 
            price="14.30" 
            method=""/>
        </div>
    </div>


    <div className="menuHeadingR">
        <p>
            Soups
        </p>
    </div>

    <div className="selectionsR">
        <div className="wrapperR">
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F277f01d6-8b87-4ede-b182-c3e882945147%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Roasted Tomato Soup" 
            price="5.50" 
            method=""/>
        <Entry 
            img="https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fa0a334c0-b92b-4b6c-982b-c2f48520f16e%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4"
            name="Rustic Chicken Soup" 
            price="5.50" 
            method=""/>

        </div>
    </div>


        <div className="footer">
            <a id="about_us" href="www.google.com"> About Us</a>

            <a id="contact" href="..."> Contact</a>
        </div>



        </div>
      );
    }
  }

  
  
  export default tenderGreens;