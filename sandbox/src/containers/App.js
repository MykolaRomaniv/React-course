import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "qwe2", name: "Manu", age: 29 },
      { id: "fgh5", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("Component will mount");
  // }

  componentDidMount() {
    console.log("Did mount");
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doeShow = this.state.showPersons;
    this.setState({ showPersons: !doeShow });
  };

  render() {
    console.log("Render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;