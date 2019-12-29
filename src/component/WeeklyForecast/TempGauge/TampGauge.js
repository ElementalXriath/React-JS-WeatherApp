import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    float: 'right',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  const PrettoSlider = withStyles({
    root: {
      color: 'aqua',
      height: 5,
      boxShadow: '0 2px 4px black',
      
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: 'black',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: '0 2px 4px blue',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);




const TrackInvertedSlider = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
     <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={props.value} />
      
    </div>
  );
}

export default TrackInvertedSlider;