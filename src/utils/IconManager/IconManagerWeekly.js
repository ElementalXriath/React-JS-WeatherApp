import React from 'react'
import { WiRain, WiStrongWind, WiHumidity, WiDaySunnyOvercast, WiDayCloudy, WiCloudy, WiDayRainMix, WiSprinkle } from "weather-icons-react";

const iconManager = (data) => {
    var summaryIcon;
    switch (data) {
        case "clear-day":
        summaryIcon = <WiDaySunnyOvercast size={40} color='white' />
            break;
        case "Drizzle":
        summaryIcon = <WiSprinkle size={40} color='white' />
            break;
        case "rain":
        summaryIcon = <WiDayRainMix size={40} color='white' />
            break;
        case "Possible Drizzle":
        summaryIcon = <div></div>
            break;
        case "cloudy":
        summaryIcon = <WiCloudy size={40} color='white' />
            break;
        case "partly-cloudy-day":
        summaryIcon = <WiDayCloudy size={40} color='white' />
            break;
      }

      return summaryIcon;
}

export default iconManager;