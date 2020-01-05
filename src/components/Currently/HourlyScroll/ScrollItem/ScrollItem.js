import React from 'react';

// Utils
import iconManager from '../../../../utils/IconManager/IconManagerWeekly';

const ScrollItem = (props) => {

    let summaryIcon = iconManager(props.icon);

    return (

        <div className="card m-0 bg-transparent text-white text-center">
            <p className="m-0">{summaryIcon}</p>
            {props.hour}
        </div>
          
    )
}

export default ScrollItem;