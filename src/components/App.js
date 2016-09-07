import React, { Component } from 'react';
import fetchData from '../api/fetchData';
import io from 'socket.io-client';
import { initSockets } from '../sockets_client.js';
import UsersList from './UsersList';
import ChatView from './ChatView';

class App extends Component {
  constructor(props) {
    super(props);
    var initUsers = localStorage.getItem( 'users' ) || {},
        initChats = localStorage.getItem( 'chats' ) || {},
        initCurrentUser = localStorage.getItem( 'currentUser' ) || '',
        initCurrentChatFriend = localStorage.getItem( 'currentChatFriend' ) || '',
        initChatID = localStorage.getItem( 'currentChatID' ) || null;
    this.state = {
      users: initUsers,
      chats: initChats,
      currentUser: initCurrentUser,
      currentChatFriend: initCurrentChatFriend,
      currentChatID: initChatID
    };
    this.onClickUser = this.onClickUser.bind(this);
  }

  componentDidMount() {
    const that = this;
    const socket = io();
    socket.on('testing123', function(data) {
      that.setState({ chats: data.chats, users: data.users });
      localStorage.setItem( 'chats', data.chats );
      localStorage.setItem( 'users', data.users );
      if (that.state.currentChatID === null && that.state.currentChatFriend !== ''){
        if ((that.state.currentUser === data.recipient && that.state.currentChatFriend === data.sender ) ||
            (that.state.currentUser === data.sender && that.state.currentChatFriend === data.recipient))
        that.setState({ currentChatID: data.chatID});
        localStorage.setItem( 'currentChatID', data.chatID );
      }
    });
    this.sendMessage = this.sendMessage.bind(null, socket);
    fetchData(that);
  }

  onClickUser(user) {
    if (this.state.currentUser !== ''){
      const users = this.state.users;
      const currentUser = this.state.currentUser
      const hasExistingChat = users[currentUser].friends[user];
      if (hasExistingChat){
        this.setState({ currentChatID: hasExistingChat });
        localStorage.setItem( 'currentChatID', hasExistingChat );
      } else{
        this.setState({ currentChatID: null });
        localStorage.setItem( 'currentChatID', null );
      }
      this.setState({ currentChatFriend: user });
      localStorage.setItem( 'currentChatFriend', user );
    } else{
      this.setState( { currentUser: user });
      localStorage.setItem( 'currentUser', user );
    }
  }

  sendMessage(socket, text, chatID, timestamp, sender, recipient) {
    socket.emit('newMessage', { message: text,
                                chatID: chatID,
                                timestamp: timestamp,
                                sender: sender,
                                recipient: recipient
                              });
  }

  render() {
    return (
      <div>
        <div className = 'main'>
          <div className = 'main-users-list'>
            <UsersList
              users = { this.state.users }
              currentUser = { this.state.currentUser }
              onClickUser = { this.onClickUser }
            />
          </div>
          <div className = 'main-chat-view'>
            <ChatView
              currentChatID = { this.state.currentChatID }
              chats = { this.state.chats }
              currentUser = { this.state.currentUser }
              currentChatFriend = { this.state.currentChatFriend }
              sendMessage= { this.sendMessage }
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;