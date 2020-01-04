import React from 'react';
import './Scroll.css';

// Components 
import ScrollItem from './ScrollItem/ScrollItem';

const Scroll = (props) => {

    function Unix_timestamp(t)
        {
        var dt = new Date(t*1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
        }


    let hour = ( 
        <span className="row">
          {props.hourly.slice(0, 3).map((hour, index) => {
            return <div className="col-4"><ScrollItem
              tempHigh={hour.temperature}
              percip={hour.precipProbability}
              hour={Unix_timestamp(hour.time)}
              summary={hour.summary}
              icon={hour.icon}                  
            /></div>
          })}
        </span>
      );


    return (
        <div className="container ContainerSize p-0">
            <div className="card bg-transparent">
                <div className="row">
                  <div className="col-1">
v
                  </div>
                  <div className="col-10">
                      <p>Hourly</p>
                  </div>
                  <div className="col-1">
v
                  </div>
                </div>
            </div>
            <div className="card bg-transparent p-0 m-0 NoBorder">
                {hour}
            </div>
        </div>
    )
}

export default Scroll;