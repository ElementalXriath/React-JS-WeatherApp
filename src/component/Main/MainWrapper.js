import React from 'react';
import './MainWrapper.css';


const mainWrapper = (props) => (

    <div className="container text-center p-2">
        <h4 className="text-left"> {props.loc}</h4>
        <div className="card Wrapper p-2">
            <div className="row">
                <div className="col">
                    <h6>Temp</h6>
                    {props.temp}
                </div>
                <div className="col">
                    {props.humidity}
                </div>
                <div className="col">
                    text
                </div>
                <div className="col">
                    text
                </div>
            </div>
        </div>

    </div>

)

export default mainWrapper;
