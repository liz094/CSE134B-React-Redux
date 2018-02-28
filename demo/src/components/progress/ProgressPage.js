import React from 'react';
import {Link, IndexLink} from 'react-router';
import {showCartNum} from '../../scripts/restaurantDetail.js';
import '../../styles/Progress.css';

let img = "https://i.imgur.com/mDuGhif.gif";

let img_style = {
  backgroundImage: "url(" + img + ")",
  top: 0,
  left: 0
};


class ProgressPage extends React.Component {
    render() {
      return (
          <div>
              <div id="header">
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

            <div id="Page_header">
            <h1>Progress</h1>
        </div>
        <div className="loading_animation">
            <img src="https://i.imgur.com/mDuGhif.gif" className="img" alt="progress_animation"/>
        </div>
        <div className="status">
            <h1>Order received ------- Picking up ------- Out for delivery ------- Delivered </h1>
        </div>
          
            <div className="send_msg">
            <p>Leave a note: </p>
                <span>
                <textarea className="textbox" id="textarea" ></textarea>
                </span>

                <button className="greenbutton" onClick="send()">Send</button>
            </div>

            <div id="msg_boxes">

<div id="1">
    <div className="message_box_yellow" id="msg_box2">
        <span id="msg2"> Out of Spinach            ------Restaurant</span>
    </div>
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
  
  export default ProgressPage;