import React from 'react';
import Daily from '../Block/WeeklyBlock';
import './WeeklyBox.css';

const weeklyBox = (props) => {

    let daily = (
        <div>
          {props.data.slice(0, 7).map((day, index) => {
            return <Daily 
              tempHigh={day.temperatureHigh}
              tempLow={day.temperatureLow}
              percip={day.precipProbability}
              day={	Math.floor(new Date(day.time*1000).getDay())}
              summary={day.summary}
              icon={day.icon}                  
            />
          })}
        </div>
      );

    return (
        <div className="mt-1 p-0 pb-3">
            <div className="card Label shadow">
                <hr className="mb-0"></hr>
                {daily}
            </div>
        </div>
    );
}

export default weeklyBox;