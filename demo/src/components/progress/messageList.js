import React, {PropTypes} from 'react';
import MessageBlock from './messageBlock';

const MessageList=(props)=>{

  

  return (
    <div>
      {props.msg_blocks.map(block =>
        <MessageBlock key = {block.content} {...block} remove = {props.remove}/>
      )}
</div>
  );


};

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
  msg_blocks: PropTypes.array.isRequired,
  remove: PropTypes.func

};

export default MessageList;
