import React from 'react';

// Components 
import NavBar from '../../layout/News/NavBar';



const News = (props) => {

    return (
        <div>

            <NavBar 
            sideNav={props.nav} />


        </div>
    )
}

export default News;