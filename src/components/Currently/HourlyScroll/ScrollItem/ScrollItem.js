import React from 'react';

// Utils
import iconManager from '../../../../utils/IconManager/IconManager';
import { WiThermometer, WiThermometerExterior, WiSprinkle } from "weather-icons-react";

const ScrollItem = (props) => {

    const [ flip , setFlip ] = React.useState(true);

    let summaryIcon = iconManager(props.icon);

    const handleFlip = () => {
        if (flip === false) {
            setFlip(true)
        } else {
            setFlip(false)
        } 
    };

    let side = <div>No Data</div>;

    let hour = '';

    switch (props.hour) {
        case '1:00':
        hour = '1:00 AM'
        break;
        case '2:00':
        hour = '2:00 AM'
        break;
        case '3:00':
        hour = '3:00 AM'
        break;
        case '4:00':
        hour = '4:00 AM'
        break;
        case '5:00':
        hour = '5:00 AM'
        break;
        case '6:00':
        hour = '6:00 AM'
        break;
        case '7:00':
        hour = '7:00 AM'
        break;
        case '8:00':
        hour = '8:00 AM'
        break;
        case '9:00':
        hour = '9:00 AM'
        break;
        case '10:00':
        hour = '10:00 AM'
        break;
        case '11:00':
        hour = '11:00 AM'
        break;
        case '12:00':
        hour = '12:00 AM'
        break;
        case '13:00':
        hour = '1:00 PM'
        break;
        case '14:00':
        hour = '2:00 PM'
        break;
        case '15:00':
        hour = '3:00 PM'
        break;
        case '16:00':
        hour = '4:00 PM'
        break;
        case '17:00':
        hour = '5:00 PM'
        break;
        case '18:00':
        hour = '6:00 PM'
        break;
        case '19:00':
        hour = '7:00 PM'
        break;
        case '20:00':
        hour = '8:00 PM'
        break;
        case '21:00':
        hour = '9:00 PM'
        break;
        case '22:00':
        hour = '10:00 PM'
        break;
        case '23:00':
        hour = '11:00 PM'
        break;
        case '0:00':
        hour = '12:00 PM'
        break;
        
    
        default:
            break;
    }

    switch (flip) {
        case true:
        side =  <div className="card m-0 bg-transparent text-white text-center" style={{border: "none"}}>
                    <a className="m-0" onClick={handleFlip}>{summaryIcon}</a>
                    {hour}
                </div>

            break;
        case false:
        side =  <div className="card m-0 bg-transparent text-white text-center" style={{border: "none"}}>
                    <a className="m-0" onClick={handleFlip}><span><WiThermometer /></span> {Math.ceil(props.tempHigh)}</a>
                    <a className="m-0" onClick={handleFlip}><span><WiThermometerExterior /></span> {Math.round(props.tempHigh)}</a>
                    <a className="m-0" onClick={handleFlip}><span><WiSprinkle /></span> {Math.round(props.percip * 100)}%</a>
                   
                </div>
        break;
        default:
            break;
    };

    return (

        <>
       {side}
        </>
          
    )
}

export default ScrollItem;