import React from 'react' ;

// CSS
import './MainView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import MainWeather from '../../components/Currently/Current';
import NavBar from '../../layout/NavBar/NavBar';
import DailyBox from '../../components/WeeklyForecast/WeeklyBox/WeeklyBox';
import Tabs from '../../components/Tabs/Tabs';
import Radar from '../../components/Radar/Radar';
import ReactLoading from "react-loading";

// Material Side Drawer
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const MainView = () => {

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
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setDone(true));
        }, 1200);
      }, []);


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

      // Side Bar
      const classes = useStyles();
      const [state, setState] = React.useState({
      left: false,
      });

      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Weather', 'Stocks', 'News', 'Horoscope'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      );
    
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
                        sideNav={toggleDrawer('left', true)}
                      />

                      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        {sideList('left')}
                      </Drawer>

                      <Tabs 
                        switchWeekly={tabSwitchWeekly} 
                        switchCurrently={tabSwitchCurrently}
                        switchRadar={tabSwitchRadar}
                      />

                    {!done ? (
                      <div className="container text-center"> <ReactLoading type={"bars"} color={"white"} /> </div>                  
                        ) : (
                       //  UI Tabs
                            <div className="container">
                              {tab}
                            </div>
                      )}
              </div>
        
    )
}

export default MainView;