import React from 'react';
import { ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const UsersListEntry = (props) => {

  return (
      <div className= 'users-list-entry' onClick = { () => props.onClickUser(props.user) }>
        {props.user}
      </div>
  );
};

UsersListEntry.propTypes = {
  user: React.PropTypes.string
};

export default UsersListEntry;