import React from 'react';

const validation = (props) => {
    let errorMsg = '';
    if (props.textLength <= 5) {
        errorMsg = 'Text too short';
    } else {
        errorMsg = 'Text too enought';
    }
    
    return (
        <p>{errorMsg}</p>
    )
}

export default validation;