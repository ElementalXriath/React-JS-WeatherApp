import React from 'react';
import Daily from '../Block/WeeklyBlock';
import './WeeklyBox.css';

const weeklyBox = (props) => {

    let daily = (
        <div className="">
          {props.data.slice(0, 7).map((day, index) => {
          
            return <Daily 
              tempHigh={day.temperatureHigh}
              tempLow={day.temperatureLow}
              percip={day.precipProbability}
              day={	Math.floor(new Date(day.time*1000).getDay())}           
            />
          })}
        </div>
      );

    return (
        <div className="mt-5 ">
            <div className="card Label">
                <h5>7 Day</h5>
            </div>

            
            {daily}
        </div>
    )
}

export default weeklyBox;