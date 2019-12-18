import React from 'react';
import { FaThermometerFull, FaCloudSun, FaCloudSunRain, FaCloudMeatball, FaSmog, FaTint } from "react-icons/fa";
import './LookingAhead.css'

const lookAhead = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="card shadow CardH">
                    <div className="card-body">
                    <h5 className="font"><span className="Current">Looking Ahead</span><hr className="mb-2 mt-1"></hr> {props.look}</h5> 
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card shadow CardH">
                    <div className="card-body text-center">
                    <h1 className="font"><FaCloudSunRain/></h1> 
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default lookAhead;