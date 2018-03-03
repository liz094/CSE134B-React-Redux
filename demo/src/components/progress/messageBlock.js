import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MessageBlock = ({message}) => {
  return (
    <div id="1" ref ="msg_blk">
    <div className="message_box_yellow">
        <span> {message.content}</span>
    </div>
    <button>Recall</button>
    </div>

  );
};

MessageBlock.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageBlock;
