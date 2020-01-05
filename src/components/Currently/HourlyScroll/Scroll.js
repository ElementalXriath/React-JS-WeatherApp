import React from 'react';
import './Scroll.css';

// Components 
import ScrollItem from './ScrollItem/ScrollItem';

// Icon
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

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
            <div className="card bg-transparent p-1 NoBorder">
                <div className="row">
                  <div className="col-2 text-center">
                    <span className="Arrow"><button className="bg-transparent NoBorder"><FaChevronCircleLeft /></button></span>
                  </div>
                  <div className="col-8">
                      <p>Hourly</p>
                  </div>
                  <div className="col-2 text-center">
                    <span className="Arrow mr-3"><button className="bg-transparent NoBorder"><FaChevronCircleRight /></button></span>
                  </div>
                </div>
           
            <div className="card bg-transparent p-0 m-0 NoBorder mt-3">
                {hour}
            </div>
            </div>
        </div>
    )
}

export default Scroll;