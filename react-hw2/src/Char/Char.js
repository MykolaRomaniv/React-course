import React from 'react';
import classes from './Char.module.css';

const char = (props) => {
    return (
        <div className={classes.Char} onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )
}

export default char;