import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { WiBarometer, WiFog, WiThermometer } from "react-icons/wi";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '250px',
    maxWidth: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    color: 'dark',
    borderRadius: 3,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.521)'
  },
  secondary: {
      color: 'white',
      fontWeight: 35
  },
  bg: {
      backgroundColor: 'rgba(0, 0, 0, 0.40)'
  }
}));

const FolderList = (props) => {
  const classes = useStyles();

  let appTemp = props.appTemp;
  let dewPoint = props.dewPoint;
  let pressure = props.pressure;


    let appTempSecondary = <span className="text-white">Apparent</span>
    let appTempPrimary = <span className="text-primary">{appTemp}</span>

    let dewPointSecondary = <span className="text-white">Dew Point</span>
    let dewPointPrimary = <span className="text-primary">{dewPoint}</span>

    let pressureSecondary = <span className="text-white">Pressure</span>
    let pressurePrimary = <span className="text-primary">{pressure}</span>
    

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.bg}>
            <WiThermometer className="h3"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={appTempPrimary} secondary={appTempSecondary} />
      </ListItem>
      <ListItem className={classes.secondary}>
        <ListItemAvatar>
          <Avatar className={classes.bg}>
            <WiFog className="h3" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={dewPointPrimary} secondary={dewPointSecondary} /> 
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.bg}>
          < WiBarometer className="h3"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={pressurePrimary} secondary={pressureSecondary} /> 
      </ListItem>
    </List>
  );
}

export default FolderList;