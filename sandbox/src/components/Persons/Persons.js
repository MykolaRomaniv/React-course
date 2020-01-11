import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent { // checks every property
  // static getDerivedStateFromProps() {
  //   cconsole.log('Persons getDirived ');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('Persons componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   if(this.props.persons !== nextProps.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons getSnapshot');
    return {message: 'Snaposhot'};
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('Porsons componentWillUnmount');
  }

  render() {
    console.log("Person.js rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;