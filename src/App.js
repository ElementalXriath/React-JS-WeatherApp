import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons/Persons';


class App extends Component {


  //Set State in Object Arrays
  //Alwats assign ID to dynmically update with out over render in the
  state = {
    persons : [
      {id: '0', name: 'Max', age: 39 },
      {id: '1', name: 'Sam', age: 34}
    ]
    
  };

  //Handle State Change
   handleChange = (event) => {
      this.setState({
        persons : [
          {name: 'Bill', age: 39 },
          {name: 'Nex', age: 34}
        ] 
      })
  };

  //How to delete from index / You should always update state immutably. 
  deletePersons = (personIndex) => {
    //Slice creates new array from orginal state
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  //Conditional Render
  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow})
  };

render() {

  let persons = null;
  //Map function , pass index of array as second argurment. If you use more then 1 argument it needs to be wrapped.
  if (this.state.showPersons) {
    persons = (
      <div>
        <Persons persons={this.state.persons} click={this.deletePersons}/>
      </div>
    );
  }
  //persons stored as JSX
  return (

    <div className="App">
    
      <button onClick={this.togglePersons}>Toggle</button>
      {persons}

    </div>

  );
}
}

export default App;

// Map Function
//   {this.state.persons.map(names => {
//  return <Person names={names.name}/>
//})}