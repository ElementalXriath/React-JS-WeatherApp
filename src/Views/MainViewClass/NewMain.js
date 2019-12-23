import React from 'react' ;
import Daily from '../../component/WeeklyForecast/Block/WeeklyBlock';

const MainView = () => {

    const [currentWeather, setCurrentWeather] =  React.useState({});
    const [dailyWeather, setDailyWeather] = React.useState([]);

    const fetchWeather = () => {
        // ->           Weather Express Route            -> Location / Geo
        fetch('http://localhost:3000/weather?address=' + 'Atlanta')
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            setDailyWeather(data.forecast.dailyData)
          )
          // Catch any errors we hit and update the app.
          .catch(error => console.log(error));
      };

      fetchWeather()
    
      let daily = (
        <div className="text-center row">
          {dailyWeather.map((day, index) => {
            return <Daily 
              tempHigh={day.}
              tempLow={day.}
            />
          })};
        </div>
      );


    return(
        <div>{daily}</div>
    )
}

export default MainView;