import React, { Component } from 'react';
import { sendMessage } from '../sockets_client.js';

class ChatTextBox extends Component {
  constructor(props) {
    super(props);
    var initMessageText = localStorage.getItem( 'messageText' ) || '';
    this.state = {
      messageText: initMessageText,
    };
  }

  setMessageText(e) {
    this.setState({ messageText: e.target.value });
    localStorage.setItem( 'messageText', e.target.value );
  }

  localSendMessage(){
    var timestamp= new Date();
    console.log('insideLocalMessage');
    this.props.sendMessage(this.state.messageText, this.props.currentChatID, timestamp, this.props.currentUser, this.props.currentChatFriend)
    this.setState({ messageText: '' });
    localStorage.setItem( 'messageText', '' );
  }

  render() {
    return (
      <div>
        <input
          className = 'test'
          placeholder = 'Type Message'
          value = { this.state.messageText }
          onChange = { (e) => this.setMessageText(e) }
        />
        <button onClick = { () => this.localSendMessage() }>
          Send
        </button>
      </div>
    );
  }
};

export default ChatTextBox;