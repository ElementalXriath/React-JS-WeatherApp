import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    people : [
      {name: 'Max', age: 39 },
      {name: 'Sam', age: 34}
    ],
    showPersons : false,
  }

   handleChange = () => {
      this.setState({
        people : [
          {name: 'Bill', age: 39 },
          {name: 'Nex', age: 34}
        ] 
      })
  }

  togglePeople = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow})
  }

render() {
  return (

    <div className="App">
      

      <button onClick={this.togglePeople}></button>

     { this.state.showPersons === true ? <div >
     <Person names={this.state.people[0].name} age={this.state.people[0].age}/>
     <Person names={this.state.people[1].name} age={this.state.people[1].age}/>
      </div> : null }
    </div>

  );
}
}

export default App;
