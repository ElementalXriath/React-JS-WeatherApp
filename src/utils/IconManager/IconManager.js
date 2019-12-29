import React from 'react'
import { WiRain, WiStrongWind, WiHumidity, WiDaySunnyOvercast, WiDayCloudy, WiCloudy, WiDayRainMix, WiSprinkle } from "weather-icons-react";

const iconManager = (data) => {
    var summaryIcon;
    switch (data) {
        case "Overcast":
        summaryIcon = <WiDaySunnyOvercast size={70} color='white' />
            break;
        case "Drizzle":
        summaryIcon = <WiSprinkle size={70} color='white' />
            break;
        case "Light Rain":
        summaryIcon = <WiDayRainMix size={70} color='white' />
            break;
        case "Possible Drizzle":
        summaryIcon = <div></div>
            break;
        case "Mostly Cloudy":
        summaryIcon = <WiCloudy size={70} color='white' />
            break;
        case "Partly Cloudy":
        summaryIcon = <WiDayCloudy size={70} color='white' />
            break;
      }

      return summaryIcon;
}

export default iconManager;