import React from 'react';

const validation = (props) => {
    let errorMsg = '';
    if (props.textLength <= 5) {
        errorMsg = 'Text too short';
    }
    if (props.textLength >= 25) {
        errorMsg = 'Text too long';
    }
    return (
        <p>{errorMsg}</p>
    )
}

export default validation;