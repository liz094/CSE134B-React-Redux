import React, {PropTypes} from 'react';
import MessageBlock from './messageBlock';

class MessageList extends React.Component{

  send(message){
    let timestamp = (new Date()).getTime();

    this.props.msg_blocks['msg-'+timestamp] = message;
    //set the state
    this.setState({ msg_blocks : this.state.msg_blocks });
    this.setState({num_msg:this.state.num_msg+1});
}

remove(key){

/*
// update the state object
delete this.state.msg_blocks[msgKey];
// set the state
this.setState({ msg_blocks : this.state.msg_blocks });
this.setState({num_msg:this.state.num_msg-1})
*/
}
render(){
  return (
    <table className="table">

      <tbody>
      {this.props.msg_blocks.map(message =>
        <MessageBlock message={message}/>
      )}
      </tbody>
    </table>
  );

}
}

/*
const MessageList = ({messages}) => {
  return (
    <table className="table">

      <tbody>
      {messages.map(message =>
        <MessageBlock key={message.id} message={message}/>
      )}
      </tbody>
    </table>
  );
};*/

MessageList.propTypes = {
  messages: PropTypes.array.isRequired

};

export default MessageList;
