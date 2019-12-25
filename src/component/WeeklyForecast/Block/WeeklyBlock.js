import React from 'react';
import './WeeklyBlock.css';
import { FaThermometerFull, FaCloudSun, FaCloudSunRain, FaCloudMeatball, FaSmog, FaTint } from "react-icons/fa";

const weeklyBlock = (props) => {


 
return  <div className="m-2 card p-2 bg-transparent text-white col NoBorder">
           <h6>
                <span className="Day">{props.day}</span>  <br></br><br></br>
                <span className="Temp Low">{Math.floor(props.tempHigh)}&deg;</span>
                <span className="Low ml-3">{Math.floor(props.tempLow)}&deg;</span> <br></br><hr></hr>
                <FaCloudMeatball/>
                <hr></hr>
                
                <FaTint className="Icon"/>
                {Math.floor(props.percip)}% 
            </h6>
        </div>
    };

export default weeklyBlock;
