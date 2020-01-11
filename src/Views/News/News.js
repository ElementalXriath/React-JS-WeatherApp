import React from 'react';

// Components 
import NavBar from '../../layout/News/NavBar';
import Tabs from '../../components/Tabs/TabsNews';
import Headlines from '../../components/Headlines/Headlines';
import ReactLoading from "react-loading";


const News = (props) => {

    // Headlines Data
    const [ headlines , setHeadlines ] = React.useState([]);

    // Loading
    const [ done , setDone ] = React.useState(null);

    const [toggleCurrent, setToggleCurrent] = React.useState('Headlines');

    const getHeadlines = () => {
        fetch('http://localhost:3000/news')
        .then(response => response.json())
        .then((data) => {
            setHeadlines(data.usNews.usaHeadlines)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    React.useEffect(() => {
        getHeadlines()
    }, []);

     // Effects
     React.useEffect(() => {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setDone(true));
        }, 1200);
      }, []);



    return (
        <div>

            <NavBar 
                sideNav={props.nav} 
            />

            {!done ? (
                      <div className="container text-center"> <ReactLoading type={"bars"} color={"blue"} /> </div>                  
                        ) : (
                       //  UI Tabs
                      <div>
                            <Tabs 
                      />
                        <div>
                            <Headlines data={headlines}/>
                        </div>
                      </div>
                      )}



        </div>
    )
}

export default News;