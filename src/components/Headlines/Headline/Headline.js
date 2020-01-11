import React from 'react';

import './Headline.css';

const Headline = (props) => {

    return (
        
            <div className="card Card p-1">
                    <img className="card-img-top Img" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-title text-primary">{props.title}</h6>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        
    )
}

export default Headline;