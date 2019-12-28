import React from 'react';
import './WeeklyBlock.css';
import { FaThermometerFull, FaCloudSun, FaCloudSunRain, FaCloudMeatball, FaSmog, FaTint } from "react-icons/fa";

const weeklyBlock = (props) => {

    var day;
    switch (props.day) {
        case 0:
          day = "Sun";
          break;
        case 1:
          day = "Mon";
          break;
        case 2:
           day = "Tue";
          break;
        case 3:
          day = "Wed";
          break;
        case 4:
          day = "Thu";
          break;
        case 5:
          day = "Fri";
          break;
        case 6:
          day = "Sat";
      };

 
return  <div className="m-2 card p-2 bg-transparent text-white  NoBorder">
           <div className="row Box">
               <div className="col-3">
                    <span className="Icon"><FaCloudMeatball/></span><span className="Day">{day}</span>
               </div>
               <div className="col-3">
                    <span className="Temp Low">{Math.floor(props.tempHigh)}&deg;</span><span className="Low ml-3">{Math.floor(props.tempLow)}&deg;</span>
               </div>
               <div className="col-6 text-right">
                    <FaTint className="Icon"/>
                      {Math.floor(props.percip)}% 
               </div>   
            </div>
        </div>
    };

export default weeklyBlock;
