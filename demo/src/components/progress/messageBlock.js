import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MessageBlock = (props) => {
  return (
    <div ref ="msg_blk">
      <div className="message_box_yellow">
          <span> {props.content}</span>
      </div>
      <button className = "recall" onClick={()=> props.remove(props.content)}>Recall</button>
    </div>

  );
};

MessageBlock.propTypes = {
  //content: PropTypes.string.isRequired 
  content: PropTypes.array.isRequired
};

export default MessageBlock;
