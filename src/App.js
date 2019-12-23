import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainView from './Views/MainViewClass/NewMain';
import BottomNav from './layout/BottomNav/BottomNav';


class App extends Component {

  render() {

      return (

        <div className="App BgColor BodyScale"> 
          <MainView/>  
          <BottomNav/>   
        </div>

      );
    }
  }

export default App;

