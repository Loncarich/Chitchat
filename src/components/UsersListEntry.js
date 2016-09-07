import React from 'react';

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