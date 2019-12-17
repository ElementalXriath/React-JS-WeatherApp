import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainWeather from '../src/component/Main/MainWrapper'
import NavBar from '../src/layout/NavBar/NavBar';


class App extends Component {

  state = {
    currentTemp: null,
    currentRain: null,
    currentHumidity: null,
    currentSummary: null,
    currentLocation: null,
    currentWindSpeed: null,
    location: 'Atlanta',
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
          currentLocation: data.location,
          currentWindSpeed: data.forecast.currentWindSpeed

        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  // On Load ->
  componentWillMount() {
    this.fetchWeather()
  };
  // Change Location in Fetch ->
  handleChange = (event) => {
    this.setState({location: event.target.value});
  };
  // Run new Req ->
  handleSubmit = () => {
    this.fetchWeather()
  };

  
  render() {
  
      return (

        <div className="App BgColor"> 
         <NavBar click={this.handleSubmit} change={this.handleChange}/>
          <MainWeather 
          loc={this.state.currentLocation} 
          temp={this.state.currentTemp} 
          humidity={this.state.currentHumidity}
          summary={this.state.currentSummary}
          windSpeed={this.state.currentWindSpeed}
          rain={this.state.currentRain}
          />
              
        </div>

      );
    }
  }

export default App;

