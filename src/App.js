import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {


  //Set State in Object Arrays
  state = {
    people : [
      {name: 'Max', age: 39 },
      {name: 'Sam', age: 34}
    ]
    
  };

  //Handle State Change
   handleChange = (event) => {
      this.setState({
        people : [
          {name: 'Bill', age: 39 },
          {name: 'Nex', age: 34}
        ] 
      })
  };

  deletePeople = (event) => {

  };

  //Conditional Render
  togglePeople = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow})
  };

render() {

  let people = null;
  //Map function , pass index of array as second argurment. If you use more then 1 argument it needs to be wrapped.
  if (this.state.showPersons) {
    people = (
      <div>
        {this.state.people.map((single, index) => {
          return <Person names={single.name}/>
        })}
        <Person names={this.state.people[0].name}/>
        <Person names={this.state.people[0].name}/>
      </div>
    );
  }
  //People stored as JSX
  return (

    <div className="App">
    
      <button onClick={this.togglePeople}>Toggle</button>
      {people}

    </div>

  );
}
}

export default App;

// Map Function
//   {this.state.people.map(names => {
//  return <Person names={names.name}/>
//})}