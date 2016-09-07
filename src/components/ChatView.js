import React from 'react';
import ChatViewEntry from './ChatViewEntry.js';
import ChatTextBox from './ChatTextBox.js';

const ChatView = (props) => {

  var chatMessages = ( <div></div> );

  if (props.currentChatID !== null){
    var currentChat= props.chats[props.currentChatID];
        if (currentChat){
          var chatsArray = Object.keys(currentChat).sort();
          chatMessages = chatsArray.map( messageID => {
            if (! isNaN(Number(messageID))){
              return (
                <ChatViewEntry
                  key = { messageID }
                  message = { currentChat[messageID].message }
                  timestamp = { currentChat[messageID].timestamp }
                  sender = { currentChat[messageID].sender }
                  currentUser = { props.currentUser }
                />
              );
            }
          })
        }
  }

    return (

      <div className = 'chat-view'>
        { props.currentChatFriend === '' ?
          props.currentUser === '' ?
            <h3> Welcome to ChitChat! Select Your Username </h3>
            : <h3> { 'Whats up ' + props.currentUser +'? Start Up a Chat!' } </h3>
          : <h3> { 'Chat with ' + props.currentChatFriend }</h3>
        }
        <hr />
        <div>
          { chatMessages }
        </div>
        <div className = 'chat-view-textbox'>
          <ChatTextBox
            currentChatID = { props.currentChatID }
            currentUser = { props.currentUser }
            currentChatFriend = { props.currentChatFriend }
            sendMessage = { props.sendMessage }
          />
        </div>
      </div>
    );
};

ChatView.propTypes = {
  currentChatID: React.PropTypes.number,
  currentUser: React.PropTypes.string,
  currentChatFriend: React.PropTypes.string
};

export default ChatView;