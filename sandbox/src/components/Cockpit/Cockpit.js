import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = () => {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    } 
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersom) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={buttonClass}
            onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;