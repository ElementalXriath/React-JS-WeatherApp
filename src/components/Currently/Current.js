import React from 'react';

// CUSTOM - CSS
import './Current.css';

// COMPONENTS
import CurrentStats from './CurrentStats/CurrentStats';
import CurrentStatsTime from './CurrentStats/CurrentStatsTime';
import Scroll from './HourlyScroll/Scroll';

// UTILS
import iconManager from '../../utils/IconManager/IconManager';

// UI-ICONS
import { WiHumidity, WiStrongWind, WiRain } from 'weather-icons-react';
import { FaLocationArrow } from 'react-icons/fa';

const mainWrapper = (props) => {

    // Icon Manager
    let summaryIcon = iconManager(props.icon);

    //Return -> 
    return (
                <div className="container text-center p-2">
                    <h4 className="text-left Font mt-3"><FaLocationArrow className="h6"/> {props.loc}</h4>
                    <hr className="Line"/>
                    <div className="row">

                        <div className="col-4 ml-0">           
                            <span className="text-light TempFont">
                                <span className="MainIcon"> {summaryIcon} </span> 
                                {props.data.temperature}<span className="Degrees">&deg;</span>
                            </span> <br></br>
                            <span className="SummaryFont">{props.data.summary}</span>               
                        </div>

                        <div className="col-8 p-0 text-white">
                            <div className="row h6">                           
                                <div className="col">
                                <WiHumidity size={32} color='lightgreen' /><h6 className="DataTags">Humidity</h6>
                                    {props.data.humidity} %
                                </div>

                                <div className="col">
                                <WiStrongWind size={32} color='yellow' /><h6 className="DataTags">WS</h6>
                                   <div>{props.data.windSpeed}</div> 
                                </div>

                                <div className="col">
                                <WiRain size={32} color='aqua' /><h6 className="DataTags">Precipitation</h6>
                                    {props.data.rain} %
                                </div>                  
                            </div>
                            <hr></hr>          
                        </div>   

                    </div>

                    <div className="container mt-3 p-0 ml-0">

                        <div>
                            <Scroll hourly={props.hourly}/>
                        </div>

                        <div className="Div"></div>
                       
                        <div className="row mt-5">
                            <div className="col mr-0">
                                <div className="card bg-transparent p-2">
                                <div class="card-header text-left p-1 StatHeader">
                                 Details
                                </div>
                                    <CurrentStats appTemp={props.data.apparentTemperature} dewPoint={props.data.dewPoint} pressure={props.data.pressure}/>
                                </div>
                            </div>
                            <div className="col ml-0">
                                <div className="card bg-transparent p-2">
                                    <div class="card-header text-left p-1 StatHeader">
                                     Featured
                                    </div>
                                    <CurrentStatsTime appTemp={props.data.cloudCover} dewPoint={props.data.uvIndex} pressure={props.data.ozone}/>
                                </div>    
                            </div>     
                        </div>  

                    </div> 

                </div>
        ) 

};

export default mainWrapper;
