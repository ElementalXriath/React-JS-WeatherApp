import React from 'react' ;

// COMPONENTS
import MainWeather from '../../components/Currently/Current';
import NavBar from '../../layout/Weather/NavBar';
import DailyBox from '../../components/WeeklyForecast/WeeklyBox/WeeklyBox';
import Tabs from '../../components/Tabs/Tabs';
import Radar from '../../components/Radar/Radar';
import ReactLoading from "react-loading";



const MainView = (props) => {

  // GLOBAL STATE CONTROLLER - FULL APPLICATION - HOOKS AND CONTEXT

  // Loading
    const [ done , setDone ] = React.useState(null);

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

    // Data
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
      
      // Effects
      React.useEffect(() => {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setDone(true));
        }, 1200);
      }, []);


      React.useEffect(() => {
        fetchWeather()
      }, [weatherLocation]);


      // Handlers
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
            data={currentWeather}   
            hourly={hourlyWeather}
            icon={currentWeather.icon}
          
        /> ;
          break;
        case 'Weekly':
          tab = <DailyBox
            data={dailyWeather} 
            loc={currentLocation}/>;
          break;
        case 'Radar':
           tab = <Radar />;
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
                        sideNav={props.nav}
                      />

                    {!done ? (
                      <div className="container text-center"> <ReactLoading type={"bars"} color={"white"} /> </div>                  
                        ) : (
                       //  UI Tabs
                      <div>
                         <Tabs 
                        switchWeekly={tabSwitchWeekly} 
                        switchCurrently={tabSwitchCurrently}
                        switchRadar={tabSwitchRadar}
                      />
                            <div className="container">
                              {tab}
                            </div>
                      </div>
                      )}
              </div>
        
    )
}

export default MainView;