import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainWeather from '../src/component/Main/MainWrapper'



class App extends Component {

  state = {
    currentTemp: null,
    currentRain: null,
    currentHumidity: null,
    currentSummary: null,
    currentLocation: null,
    location: 'atlanta',
    value: ''
  };


  fetchWeather() {
    // Where we're fetching data from
    fetch('http://localhost:3000/weather?address=' + this.state.location)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          currentTemp: data.forecast.currentTemp,
          currentRain: data.forecast.currentRain,
          currentHumidity: data.forecast.currentHumidity,
          currentSummary: data.forecast.currentSummary,
          currentLocation: data.location

        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentWillMount() {
    this.fetchWeather()
  };
  
  handleChange = (event) => {
    this.setState({location: event.target.value});
  }

  handleSubmit = () => {
    this.fetchWeather()
  }

  
  render() {
  
      return (

        <div className="App"> 
         <nav className="navbar navbar-light bg-light">
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Click</button>
        </nav>
        <MainWeather loc={this.state.currentLocation} temp={this.state.currentTemp}/>
              
        </div>

      );
    }
  }

export default App;

