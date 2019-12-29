import React from 'react';

// CUSTOM - CSS
import './MainWrapper.css';

// UTILS
import iconManager from '../../utils/IconManager/IconManager';

// UI-ICONS
import { WiRain, WiStrongWind, WiHumidity } from "weather-icons-react";

const mainWrapper = (props) => {

    // Icon Manager
    let summaryIcon = iconManager(props.summary);

    //Return -> 
    return (
                <div className="container text-center p-2">
                    <h4 className="text-left Font mt-3">{props.loc}</h4>
                    <hr className="Line"/>
                    <div className="row">
                        <div className="col-4 ml-0">           
                            <span className="text-light TempFont">
                                <span className="MainIcon"> {summaryIcon} </span> 
                                {props.temp}<span className="Degrees">&deg;</span>
                            </span> <br></br>
                            <span className="SummaryFont"> {props.summary}</span>               
                        </div>
                        <div className="col-8 p-0 text-white">
                            <div className="row h6">                           
                                <div className="col">
                                <WiHumidity size={32} color='lightgreen' /><h6 className="DataTags">Humidity</h6>
                                    {props.humidity} %
                                </div>

                                <div className="col">
                                <WiStrongWind size={32} color='yellow' /><h6 className="DataTags">Wind Speed</h6>
                                    {props.windSpeed} Mph
                                </div>

                                <div className="col">
                                <WiRain size={32} color='aqua' /><h6 className="DataTags">Precipitation</h6>
                                    {props.rain} %
                                </div>                  
                            </div>
                            <hr></hr>
                            <div>
                                Current
                            </div>   
                        </div>                    
                    </div>       
                </div>
        ) 

};

export default mainWrapper;
