import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'qwe2', name: 'Manu', age: 29 },
      { id: 'fgh5', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  togglePersonHandler = () => {
    const doeShow = this.state.showPersons;
    this.setState({showPersons: !doeShow});
  }

  render () {
   
    /*
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }; */

    const StyledButton = styled.button`
      background-color: ${props => props.toggleColor ? 'red' : 'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color:  ${props => props.toggleColor ? 'salmon' : 'lightgreen'};
        color: black
      }
    `;

    let persons = null;

    if(this.state.showPersons) {
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'white'
      // };
      
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.state.deletePersonHandler}
            changed={this.state.nameChangedHandler} />
        </div>
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton 
            toggleColor={this.state.showPersons}
            onClick={this.togglePersonHandler}>Toggle persons</StyledButton>
            {persons}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
export default App;