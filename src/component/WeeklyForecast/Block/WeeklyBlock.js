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

      const tempMeter = {
        color: 'white',
        backgroundColor: 'blue',
        width: `${props.tempHigh}%`,
        marginRight: 0,
        paddingLeft: 'auto'
    };

    

 
return  (
              <div className="m-0 ml-4 mr-0 mw-100 card p-1 bg-transparent text-white NoBorder">
                  <div className="card Box p-1 m-0">
                      <div className="row p-1">

                          <div className="col-1">
                              <span className="h4"><FaCloudMeatball/> </span>
                          </div>

                          <div className="col-3">
                              <span className="Day">{day}</span>
                          </div>

                          <div className="col-2"> 
                              {Math.floor(props.percip)}%
                              
                          </div>
                          
                          <div className="col-6 text-right">
                          <span className="Temp Low ml-3 float-right">L {Math.floor(props.tempLow)}&deg;</span>
                            <div style={tempMeter} className="float-right TempGauge">
                                <span className="Temp Low float-left">{Math.floor(props.tempHigh)}&deg; H</span>
                            </div>
                            
                          </div>   

                        </div>
                    </div>
                </div>
      )
    };

export default weeklyBlock;
