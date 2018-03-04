import React from 'react';
import {Link, IndexLink} from 'react-router';
import MessageList from './messageList';
import '../../styles/Progress.css';

let img = "https://i.imgur.com/mDuGhif.gif";

let img_style = {
  backgroundImage: "url(" + img + ")",
  top: 0,
  left: 0
};

class ProgressPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { 
            textVal : "",
            msg_blocks: [
                
            ]
        };
        this.send = this.send.bind(this);
        this.remove = this.remove.bind(this);
    }



    send(){

      //  let msg = this.state.textVal + "1";
        let msg = this.refs.msg.value;
       // alert("sending"+msg);
         //set the state
         
         let old = this.state.msg_blocks;
         
         this.setState({msg_blocks:[...old,{content:msg}]});
         
     //   this.setState({msg_blocks: [...this.state.msg_blocks,{content: message}]});

      //  this.setState( prevState => ({msg_blocks: [...this.state.msg_blocks,{content:message}]}));
        //this.setState({num_msg:this.state.num_msg+1});
    }
    
    remove(key){
        // to be modified
        let i =0;
        for (i =0; i< this.state.msg_blocks.length; i++){
            if (key==this.state.msg_blocks[i].content){
                let newMSG = this.state.msg_blocks;
                newMSG.splice(i, 1);
                this.setState({msg_blocks: newMSG});
            }
        }
    

    }


    render() {
      return (
          <div>
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
            <textarea ref="msg" className="textbox" id="textarea" />
                <button type="submit" className="greenbutton" onClick={this.send}>Send</button>
                {/* onClick={(msg) => this.send(msg)} */}

            </div>

            <div id="msg_boxes" >

<div id="1" ref ="one">
    <div className="message_box_yellow" id="msg_box2">
        <span id="msg2"> Out of Spinach            ------Restaurant</span>
    </div>
</div>

            <MessageList msg_blocks={this.state.msg_blocks} remove={(content)=> this.remove(content)}/>
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