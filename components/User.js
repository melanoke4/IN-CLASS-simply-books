// import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import SignOut from './SignOut';

export default function User() {
  const { user } = useAuth();
  //   const [lastLoginTime, setLastLoginTime] = useState('');
  return (
    <div className="text-light text-center">
      {/* <Image
        src={user.photoURL}
        className="rounded-circle"
        width="100px"
        height="100px"
      /> */}
      <h2>{user.displayName}</h2>
      <h3>{user.email}</h3>
      {/* <h3>{user.lastLoginTime}</h3> */}
      <SignOut />
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    email: PropTypes.string,
    // last login
    lastLogin: PropTypes.shape({
      lastLoginTime: PropTypes.string,
    }),
  }).isRequired,
};
