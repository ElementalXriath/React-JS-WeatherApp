import React from 'react' ;

import './MainView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainWeather from '../../component/Main/MainWrapper'
import NavBar from '../../layout/NavBar/NavBar';
import DailyBox from '../../component/WeeklyForecast/WeeklyBox/WeeklyBox';

const MainView = () => {

    const [currentWeather, setCurrentWeather] =  React.useState({});
    const [dailyWeather, setDailyWeather] = React.useState([]);
    const [currentLocation, setCurrentLocation] = React.useState('')
    const [weatherLocation, setWeatherLocation] = React.useState('Atlanta');
    const [search, setSearchLocation] = React.useState('');

    const fetchWeather = () => {
        fetch('http://localhost:3000/weather?address=' + weatherLocation)
          .then(response => response.json())         
          .then((data) => {
            setDailyWeather(data.forecast.dailyData);
            setCurrentWeather(data.forecast.current);
            setCurrentLocation(data.location);
          })        
          .catch(error => console.log(error));
      };
     
      React.useEffect(() => {
        fetchWeather()
      }, [weatherLocation]);

      const handleChange = (event) => {
        setSearchLocation(event.target.value)
      };

      const handleSubmit = () => {
        setWeatherLocation(search)
      };
  
      // Daily Block
  
    return (
              <div>
                      <NavBar 
                        click={handleSubmit} 
                        change={handleChange}
                      />

                      <MainWeather 
                        loc={currentLocation} 
                        temp={currentWeather.temperature} 
                        humidity={currentWeather.humidity}
                        summary={currentWeather.summary}
                        windSpeed={currentWeather.windSpeed}
                        rain={currentWeather.precipProbability}
                      />
        
                      <div className="container">
                        <DailyBox data={dailyWeather}/>
                      </div>
            </div>
        
    )
}

export default MainView;