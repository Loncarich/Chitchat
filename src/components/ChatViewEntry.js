import React from 'react';

const ChatViewEntry = (props) => {

  return (
    <div className = 'chat-view-entry'>
      { props.sender === props.currentUser ?
        <div className = 'chat-view-entry-self'>
          {props.message}
        </div> :
        <div className = 'chat-view-entry-friend'>
          {props.message}
        </div>
      }
    </div>
  );
};

ChatViewEntry.propTypes = {
  message: React.PropTypes.string,
  timestamp: React.PropTypes.string,
  sender: React.PropTypes.string,
  currentUser: React.PropTypes.string
};

export default ChatViewEntry;