import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    people : [
      {name: 'Max', age: 39 },
      {name: 'Sam', age: 34}
    ]
    
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

    

        {this.state.people.map(names => {
          return <Person names={names.name}/>
        })}



     
    </div>

  );
}
}

export default App;
