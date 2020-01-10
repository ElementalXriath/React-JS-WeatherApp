import React, { Component } from 'react';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Weather from './Views/Weather/Weather';
import News from './Views/News/News';

// Material Side Drawer
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const App = () => {

    // Side Bar
    const classes = useStyles();
    const [state, setState] = React.useState({
    left: false,
    });

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [side]: open });
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
        
            <ListItem>
              <Link to="/">Weather</Link>
            </ListItem>
            <ListItem>
              <Link to="/news">News</Link>
            </ListItem>
         
        </List>
        <Divider />
      </div>
    );
   
      return (
        <Router>
          <div className="App">
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                  {sideList('left')}
            </Drawer>
            <Switch>
              <Route exact path="/">
                <div className="BgColorWeather BodyScale">
                  <Weather nav={toggleDrawer('left', true)}/>
                </div>  
              </Route>
              <Route path="/news">
                <div className="BgColorNews BodyScale">
                  <News nav={toggleDrawer('left', true)}/>
                </div>
              </Route>
            </Switch>
            
          </div>
        </Router>

      )
    
}

export default App;

