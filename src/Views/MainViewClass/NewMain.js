import React from 'react' ;


const MainView = () => {

    const [currentWeather, setCurrentWeather] =  React.useState({});

    const fetchWeather = () => {
        // ->           Weather Express Route            -> Location / Geo
        fetch('http://localhost:3000/weather?address=' + this.state.location)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            setCurrentWeather(data.data)
          )
          // Catch any errors we hit and update the app.
          .catch(error => this.setState({ error, isLoading: false }));
      };
    
    

    return(
        <div></div>
    )
}

export default MainView;