import React from 'react';
import './MainWrapper.css';
import { FaThermometerFull, FaCloudSun, FaCloudSunRain, FaCloudMeatball, FaSmog, FaTint } from "react-icons/fa";

const mainWrapper = (props) => {

    var summaryIcon = '';

    switch (props.summary) {
        case "Overcast":
        summaryIcon = <FaCloudSun/>
            break;
        case "Drizzle":
        summaryIcon = <FaCloudSunRain/>
            break;
        case "Light Rain":
        summaryIcon = <FaCloudSunRain/>
            break;
        case "Possible Drizzle":
        summaryIcon = <FaCloudSunRain/>
            break;
        case "Mostly Cloudy":
        summaryIcon = <FaCloudSunRain/>
            break;
      }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

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
                                    <h6 className="DataTags">Humidity</h6>
                                    {props.humidity} %
                                </div>

                                <div className="col">
                                    <h6 className="DataTags">Wind Speed</h6>
                                    {props.windSpeed} Mph
                                </div>

                                <div className="col">
                                    <h6 className="DataTags"><FaTint /> Rain</h6>
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
