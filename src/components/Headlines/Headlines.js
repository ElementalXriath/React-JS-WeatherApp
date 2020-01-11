import React from 'react';

import Headline from './Headline/Headline'

const Headlines = (props) => {

    let headlineArr = (
        <div className="card-deck" >
            {props.data.slice(0 , 3).map((head, index) => {
                return <Headline
                title={head.title}
                description={head.description} 
                img={head.urlToImage}
                key={head.title}
                />
            })}
        </div>
    )

    return (
        <div className="container">
            <h1>Headlines</h1>
            <div>
                {headlineArr}
            </div>
        </div>
    )
}

export default Headlines;