import React from 'react';
import UsersListEntry from './UsersListEntry.js';

const UsersList = (props) => {

  const usersArray = Object.keys(props.users).sort();
  const usersList = usersArray.map((user) => {
    if (user !== props.currentUser){
      return (
        <UsersListEntry
          key= { user }
          user= { user }
          onClickUser= { props.onClickUser }
        />
      );
    }
  });

  return (
    <div className = 'users-list' >
      { usersList }
    </div>
  );
};

UsersList.propTypes = {
  currentUser: React.PropTypes.string
};

export default UsersList;