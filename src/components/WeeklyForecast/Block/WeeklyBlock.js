import React from 'react';
import './WeeklyBlock.css';
import { WiFahrenheit, WiRaindrop } from "weather-icons-react";
import TempGauge from '../TempGauge/TampGauge';


import iconManager from '../../../utils/IconManager/IconManager';


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

      let summaryIcon = iconManager(props.icon);
    
return  (
              <div className="m-0 ml-1 mr-0 mw-100 card p-1 bg-transparent text-white NoBorder">
                  <div className="card Box p-1 m-0">
                      <div className="row p-1">

                          <div className="col-3">
                              <span className="h6">{summaryIcon}</span><br></br> <span className="Day ml-3 mt-0">{day}</span>
                          </div>

                         
                          <div className="col-2"> 
                          <WiRaindrop size={28} color='white' />
                              <span className="Rain">{Math.floor(props.percip)}%</span>              
                          </div>
                          
                          <div className="col-7 text-right">
                           <span><span className="TempLabel">Temp</span> <span className="Temperature">{props.tempHigh}</span> <WiFahrenheit size={24} color='white' /></span> <br></br> <TempGauge value={props.tempHigh} />
                          </div>   

                        </div>
                    </div>
                </div>
      )
    };

export default weeklyBlock;
