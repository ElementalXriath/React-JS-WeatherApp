import React from 'react' ;

import './MainView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainWeather from '../../component/Main/MainWrapper'
import NavBar from '../../layout/NavBar/NavBar';
import Daily from '../../component/WeeklyForecast/Block/WeeklyBlock';

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

    
      
      
      let daily = (
        <div className="text-center row">
          {dailyWeather.slice(0, 7).map((day, index) => {
          
            return <Daily 
              tempHigh={day.temperatureHigh}
              tempLow={day.temperatureLow}
              percip={day.precipProbability}
              day={	Math.floor(new Date(day.time*1000).getDay())}           
            />
          })}
        </div>
      );

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
                        {daily}
                      </div>
            </div>
        
    )
}

export default MainView;