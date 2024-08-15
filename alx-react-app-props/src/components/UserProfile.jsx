/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {

    const {name ,age , bio} = useContext(UserContext);
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default UserProfile;