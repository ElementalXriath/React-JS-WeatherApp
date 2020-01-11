import React from 'react';

import Headline from './Headline/Headline'

const Headlines = (props) => {

    return (
        <div className="container">
            <h1>Headlines</h1>
            <div class="card-deck">
                <Headline />
                <Headline />
                <Headline />
            </div>
        </div>
    )
}

export default Headlines;