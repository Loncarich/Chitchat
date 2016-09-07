
export function sendMessage(text, chatID, timestamp, sender, recipient) {
  console.log('inside sendMessage');
  socket.emit('newMessage', { message: text,
                              chatID: chatID,
                              timestamp: timestamp,
                              sender: sender,
                              recipient: recipient
                            });
};
