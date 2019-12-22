import React, { Component, useState } from 'react';
import '../../../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainWeather from '../../component/Main/MainWrapper'
import NavBar from '../../layout/NavBar/NavBar';
import LookAhead from '../../component/LookingAhead/LookingAhead';
import Daily from '../../component/WeeklyForecast/Block/WeeklyBlock';

// Only using one source of state detection -> Location / Location Changes the App Changes Data UI Remains -> Controls Entire App - Not using Redux

class App extends Component {
    
  state = {
    currentTemp: null,
    currentRain: null,
    currentHumidity: null,
    currentSummary: null,
    currentLocation: null,
    currentWindSpeed: null,
    lookAhead: null,
    location: 'Atlanta',
    value: '',
    weekly: [
      {day: 'Sunday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Monday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Tuesday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Wednesday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Thursday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Friday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null},
      {day: 'Saturday', tempHigh: null, tempLow: null, precipProbability: null, windSpeed: null}
    ]
  };

  fetchWeather() {
    // ->           Weather Express Route            -> Location / Geo
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
          currentWindSpeed: data.forecast.currentWindSpeed,
          lookAhead:  data.forecast.lookAhead,
          weekly: [
            {day: 'S', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'M', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'T', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'W', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'T', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'F', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind},
            {day: 'S', tempHigh: data.forecast.sundayTemp, tempLow: data.forecast.sundayTempLow, precipProbability: data.forecast.sundayRain, windSpeed: data.forecast.sundayWind}
          ]

        })
      )
      // Catch any errors we hit and update the app.
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

    //-> Mapping Through Daily State
      let daily = (
        <div className="text-center row">
          {this.state.weekly.map((day, index) => {
            return <Daily 
              day={day.day}
              tempHigh={day.tempHigh}
              tempLow={day.tempLow}
              percip={day.precipProbability}
            />
          })};
        </div>
      );

      return (

        <div className="App BgColor BodyScale">
           
            <NavBar 
              click={this.handleSubmit} 
              change={this.handleChange}
            />

            <MainWeather 
              loc={this.state.currentLocation} 
              temp={this.state.currentTemp} 
              humidity={this.state.currentHumidity}
              summary={this.state.currentSummary}
              windSpeed={this.state.currentWindSpeed}
              rain={this.state.currentRain}
            />

           

            <div className="container">
              {daily}
            </div>
                     
        </div>

      );
    }
  }

export default App;