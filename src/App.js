import React, { Component } from 'react';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import MainView from './Views/MainViewClass/MainView';

class App extends Component {

  render() {

      return (

        <div className="App BgColor BodyScale"> 
          <MainView/>  
        </div>

      )
    }
  }

export default App;

