import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='user-output'>
            <p>{props.name} says:</p>
            <p>{props.text}</p>
        </div>
    )
};

export default UserOutput;