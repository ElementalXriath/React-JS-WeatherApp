import React from 'react';
import './LookingAhead.css'

const lookAhead = (props) => (

    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card shadow CardH">
                    <div className="card-body">
                    <h5 className=""><span className="Current Font">Looking Ahead</span><hr className="mb-2 mt-1"></hr> {props.look}</h5> 
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default lookAhead;