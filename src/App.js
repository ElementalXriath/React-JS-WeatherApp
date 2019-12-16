import React, { Component } from 'react';
import './App.css';
import ComponentOne from './component/componentOne';


class App extends Component {

  state = {
    currentTemp: null,
    location: 'atlanta'
  }


  fetchUsers() {
    // Where we're fetching data from
    fetch('http://localhost:3000/weather?address=' + this.state.location)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          currentTemp: data.forecast.currentTemp
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers()
  }
  
 

  
  render() {
    console.log(this.state.currentTemp)
      return (

        <div className="App">
         <ComponentOne/>
        </div>

      );
    }
  }

export default App;



//Hooks 

// const [personState, setStateP] = useState({
//   persons : [
//     {name: }
//   ]
// }) firs is the state , second is a call back to set state.