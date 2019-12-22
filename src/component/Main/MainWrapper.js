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
            <h4 className="text-left Font mt-3">{summaryIcon} {props.loc}  
            <hr className="Line"/></h4>

            <div className="row LowMargin">
                <div className="col">
                    <span className="MainIcon">{summaryIcon}</span>
                </div>
                <div className="col HighMargin">
                    <span className="text-light TempFont"> {props.temp} &deg; F</span> <br></br>
                    <span className="SummaryFont"> {props.summary}</span>
                   
                    
                </div>
            </div>


                <div className="card Wrapper pt-4 shadow bg-transparent text-light p-0">
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
