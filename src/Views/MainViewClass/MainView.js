import React from 'react' ;

// CSS
import './MainView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import MainWeather from '../../components/Currently/Current';
import NavBar from '../../layout/NavBar/NavBar';
import DailyBox from '../../components/WeeklyForecast/WeeklyBox/WeeklyBox';
import Tabs from '../../components/Tabs/Tabs'

const MainView = () => {

  // GLOBAL STATE CONTROLLER - FULL APPLICATION - HOOKS AND CONTEXT

    // Current Forecast
    const [currentWeather, setCurrentWeather] =  React.useState({});

    // 7 Day Forecast
    const [dailyWeather, setDailyWeather] = React.useState([]);

    // Hourly Forecast Max 12
    const [hourlyWeather, setHourlyWeather] = React.useState([]);

    // Location / GeoJson
    const [currentLocation, setCurrentLocation] = React.useState('')
    const [weatherLocation, setWeatherLocation] = React.useState('Atlanta');
    const [search, setSearchLocation] = React.useState('');

    // UI Visibility
    const [toggleCurrent, setToggleCurrent] = React.useState('Currently');

    const fetchWeather = () => {
        fetch('http://localhost:3000/weather?address=' + weatherLocation)
          .then(response => response.json())         
          .then((data) => {
            setDailyWeather(data.forecast.dailyData);
            setCurrentWeather(data.forecast.current);
            setCurrentLocation(data.location);
            setHourlyWeather(data.forecast.hourlyData);
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
        setSearchLocation('')
      };

      // UI TAB - Controller

      let tab = null;

      switch (toggleCurrent) {
        case 'Currently':
          tab =  <MainWeather 
          loc={currentLocation} 
          temp={currentWeather.temperature} 
          humidity={currentWeather.humidity}
          summary={currentWeather.summary}
          windSpeed={currentWeather.windSpeed}
          rain={currentWeather.precipProbability}
          appTemp={currentWeather.apparentTemperature}
          dewPoint={currentWeather.dewPoint}
          pressure={currentWeather.pressure}
          hourly={hourlyWeather}
          
        /> ;
          break;
        case 'Weekly':
          tab = <DailyBox data={dailyWeather} loc={currentLocation}/>;
          break;
        case 'Radar':
           tab = <div>Radar</div>;
          break;
      };

      const tabSwitchWeekly = () => {
        setToggleCurrent('Weekly')
      };

      const tabSwitchCurrently = () => {
        setToggleCurrent('Currently')
      };

      const tabSwitchRadar = () => {
        setToggleCurrent('Radar')
      };
  
     
  
    return (
              <div>
                      <NavBar 
                        click={handleSubmit} 
                        change={handleChange}
                        value={search}
                      />

                      <Tabs 
                      switchWeekly={tabSwitchWeekly} 
                      switchCurrently={tabSwitchCurrently}
                      switchRadar={tabSwitchRadar}
                      />
                   
                      {/* UI State - tab */}
                      <div className="container">
                        {tab}
                      </div>

            </div>
        
    )
}

export default MainView;