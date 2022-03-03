import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { name, avreage, attendance = '0%' } }) => {
  return (
    <li>
      <div>{avreage}</div>
      <div>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    avreage: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
