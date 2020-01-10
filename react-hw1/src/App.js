import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    users: [
      {name: 'Mykola', text:'Hi'},
      {name: 'Nika', text:'Hello'}
    ] 
  }
  
  changeUsernameHandler = ( event ) => {
    this.setState( {
      users: [
        {name: 'Mykola', text:'Hi'},
        {name: event.target.value, text:'Hello'}
      ] 
    })
  }

  render() {
    return (  
      <div className="App">
        <UserInput
          changed={this.changeUsernameHandler}
          name={this.state.users[1].name}
          />
        <UserOutput
          name={this.state.users[0].name}
          text={this.state.users[0].text} />
        <UserOutput
          name={this.state.users[1].name}
          text={this.state.users[1].text} />
      </div>
    );
  }
}
export default App;
