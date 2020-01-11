import React from 'react';

// Components 
import NavBar from '../../layout/News/NavBar';
import Tabs from '../../components/Tabs/TabsNews';
import Headlines from '../../components/Headlines/Headlines';


const News = (props) => {

    const [toggleCurrent, setToggleCurrent] = React.useState('Headlines');

    return (
        <div>

            <NavBar 
            sideNav={props.nav} />

            <Tabs/>

            <div>
                <Headlines />
            </div>


        </div>
    )
}

export default News;