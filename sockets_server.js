
function initSockets(socket, iota){

  socket.on('newMessage', function(data) {
    if (data.chatID === null){
      console.log(chatData.chats.chatIdCount);
      chatData.chats.chatIdCount ++;
      var count = chatData.chats.chatIdCount;
      chatData.chats[count] = { messageCount: 0 };
      chatData.chats[count].messageCount ++;
      var messageCount = chatData.chats[count].messageCount;
      chatData.chats[count][messageCount] = {
        sender: data.sender,
        message: data.message,
        timestamp: data.timestamp
      };
      chatData.users[data.sender].friends[data.recipient] = count;
      chatData.users[data.recipient].friends[data.sender] = count;
      iota.emit('testing123', { chats: chatData.chats, chatID: count, users: chatData.users, sender: data.sender, recipient: data.recipient});
    } else{
      var currentChat= chatData.chats[data.chatID];
      currentChat.messageCount ++;
      currentChat[currentChat.messageCount] = {
        sender: data.sender,
        message: data.message,
        timestamp: data.timestamp
      }
      iota.emit('testing123', { chats: chatData.chats, users: chatData.users })
    }
  });

};

var chatData = {
  users: {
    beth: {
      friends: {
        ann: 1
      }
    },
    ann: {
      friends: {
        beth: 1,
        sarah: 2
      }
    },
    sarah: {
      friends: {
        ann: 2
      }
    },
    jim: {
      friends: {
        terrence: 3
      }
    },
    terrence: {
      friends: {
        jim: 3
      }
    }
  },
  chats: {
    1: {
      1: {
        sender: 'ann',
        message: 'hey',
        timstamp: new Date()
      },
      2: {
        sender: 'beth',
        message: 'testbeth',
        timestamp: new Date()
      },
      3: {
        sender: 'ann',
        message: 'Wanna grab lunch',
        timestamp: new Date()
      },
      messageCount: 3
    },
    2: {
      1: {
        sender: 'ann',
        message: 'hey',
        timstamp: new Date()
      },
      2: {
        sender: 'sarah',
        message: 'sarah',
        timestamp: new Date()
      },
      3: {
        sender: 'ann',
        message: 'Wanna grab lunch',
        timestamp: new Date()
      },
      messageCount: 3

    },
    3: {
      1: {
        sender: 'terrence',
        message: 'hey',
        timstamp: new Date()
      },
      2: {
        sender: 'jim',
        message: 'hi',
        timestamp: new Date()
      },
      3: {
        sender: 'terrence',
        message: 'Wanna grab lunch',
        timestamp: new Date()
      },
      messageCount: 3
    },
    chatIdCount: 3
  }
};

module.exports = {
  initSockets: initSockets,
  chatData: chatData
}
