import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
render() {
  
  return (

    <div className="App">
      <Person name="Max" age="28"/>
      <Person name="Stephanie" age="32"/>
    </div>


        );
  }
}

export default App;
