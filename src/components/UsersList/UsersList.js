import React from 'react';
import { user } from 'data/data';
import UserListItem from 'components/UserListItem/UserListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {user &&
          user.map((userData) => (
            <UserListItem key={userData.name} userData={userData} />
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
