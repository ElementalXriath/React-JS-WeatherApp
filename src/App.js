import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainWeather from '../src/component/Main/MainWrapper';


class App extends Component {

  state = {
    currentTemp: null,
    currentRain: null,
    currentHumidity: null,
    currentSummary: null,
    location: 'atlanta',
    value: ''
  }


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
          currentHumidity: data.forecast.currentSummary

        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.fetchWeather()
  };
  
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = () => {
    const newLocation = this.state.value;
    this.setState({location: newLocation})
    this.fetchWeather()
  }

  
  render() {
  
      return (

        <div className="App"> 
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input class="form-control mr-sm-2"  type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0 float-left" onClick={this.handleSubmit}>Search</button>
          </form>
        </nav>

          <MainWeather />
         
         
        </div>

      );
    }
  }

export default App;

