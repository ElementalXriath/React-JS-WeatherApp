import React from 'react';

// Components
import './Scroll.css';

// Components 
import ScrollItem from './ScrollItem/ScrollItem';

// Icon
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Scroll = (props) => {

  const [ showing, setShowing ] = React.useState([0 , 3])

    function Unix_timestamp(t)
        {
        var dt = new Date(t*1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        return hr+ ':' + m.substr(-2);  
        }


    let hour = ( 
        <span className="row">
          {props.hourly.slice(showing[0], showing[1]).map((hour, index) => {
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

      const handleSwitchRight = () => {
        let argOne = showing[0] + 3;
        let argTwo = showing[1] + 3;
        setShowing([argOne , argTwo]);
      }

      const handleSwitchLeft = () => {
        let argOne = showing[0] - 3;
        let argTwo = showing[1] - 3;
        setShowing([argOne , argTwo]);
      }

      let disabled = <div></div>

      if (showing[0] === 0) {        
        disabled = <span className="Arrow"><button className="bg-transparent"  disabled style={{border: "none"}} onClick={handleSwitchLeft}><FaArrowLeft className="text-dark"/></button></span>
      } else {
        disabled = <span className="Arrow"><button className="bg-transparent"  style={{border: "none"}} onClick={handleSwitchLeft}><FaArrowLeft className="text-primary"/></button></span>
      }

      let dataLabel = 'Hourly';

     
    return (
        <div className="container ContainerSize p-0">
            <div className="card bg-transparent p-1" style={{border: "none"}}>
                <div className="row">
                  <div className="col-2 text-center">
                    {disabled}
                  </div>
                  <div className="col-8">
                      <p className="text-light">{dataLabel}</p>
                      <hr className="m-0"></hr>
                  </div>
                  <div className="col-2 text-center">
                    <span className="Arrow mr-3"><button className="bg-transparent" style={{border: "none"}} onClick={handleSwitchRight}><FaArrowRight className="text-primary"/></button></span>
                  </div>
                </div>
           
            <div className="card bg-transparent p-0 m-0 mt-3" style={{border: "none"}}>
                {hour}
            </div>
            </div>
        </div>
    )
}

export default Scroll;