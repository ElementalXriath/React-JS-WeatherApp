import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {


  //Set State in Object Arrays
  //Alwats assign ID to dynmically update with out over render in the dom
  state = {
    people : [
      {id: '0', name: 'Max', age: 39 },
      {id: '1', name: 'Sam', age: 34}
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

  //How to delete from index / You should always update state immutably. 
  deletePeople = (singleIndex) => {
    //Slice creates new array from orginal state
    //const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(singleIndex, 1);
    this.setState({people: people});
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
          return <Person names={single.name} click={ () => this.deletePeople(index)} key={single.id}/>
        })}
       
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