import React from 'react';
import './MainWrapper.css';
import { FaThermometerFull, FaCloudSun, FaCloudSunRain, FaCloudMeatball, FaSmog, FaTint } from "react-icons/fa";

const mainWrapper = (props) => {

    var summaryIcon = <FaCloudMeatball/>;

    if(props.summary == "Overcast"){
        summaryIcon = <FaCloudSun></FaCloudSun>
    }
    if(props.summary == "Drizzle" || props.summary == "Light Rain" || props.summary == "Possible Drizzle"){
        summaryIcon = <FaCloudSunRain></FaCloudSunRain>
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    
    //Return -> 
   return <div className="container text-center p-2">
            <h4 className="text-left Font mt-3">{summaryIcon} {props.loc}   {props.temp} &deg; F
            <hr className="Line"/><span className="Current">Current {time}:</span> {props.summary} </h4>
                <div className="card Wrapper p-2 pt-4 shadow">
                    <div className="row h6">

                        <div className="col">
                            <h6 className="DataTags"><FaThermometerFull/> Temp</h6>
                            {props.temp} &deg; F
                        </div>
                        
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
                </div>
        </div>

};

export default mainWrapper;
