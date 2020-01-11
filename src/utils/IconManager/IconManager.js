import React from 'react'
import { WiRain, WiStrongWind, WiHumidity, WiDaySunnyOvercast, WiDayCloudy, WiCloudy, WiDayRainMix, WiSprinkle, WiSunset } from "weather-icons-react";

const iconManager = (data) => {
    var summaryIcon;
    switch (data) {
        case "clear-day":
        summaryIcon = <WiSunset size={40} color='yellow' />
            break;
        case "clear-night":
        summaryIcon = <WiDaySunnyOvercast size={40} color='white' />
            break;
        case "sleet":
        summaryIcon = <WiSprinkle size={40} color='aqua' />
            break;
        case "rain":
        summaryIcon = <WiRain size={40} color='aqua' />
            break;
        case "fog":
        summaryIcon = <WiDayRainMix size={40} color='white' />
            break;
        case "cloudy":
        summaryIcon = <WiCloudy size={40} color='white' />
            break;
        case "partly-cloudy-day":
        summaryIcon = <WiDayCloudy size={40} color='white' />
            break;
        case "partly-cloudy-night":
        summaryIcon = <WiDayCloudy size={40} color='white' />
            break;
      }

      return summaryIcon;
}

export default iconManager;