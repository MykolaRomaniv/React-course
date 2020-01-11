import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'

function Cockpit(props) {
    useEffect(() => { // componentDidMount and componentDidUpdate
        console.log('Cockpit useEffect');
        const timer = setTimeout(() => {
            console.log('save to the cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log("Cockpit clean up work in useAffect"); //runs like componentWillUnmuont
        }
    }, [props.persons]); // [] empty array for run only once, on mount

    // useEffect()...  may use several times

    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    } 
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default React.memo(Cockpit); //rerender inly when internals changed