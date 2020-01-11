import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.721)',
    color: 'white'
  },
});

  const CenteredTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="white"
        centered
      >
        <Tab label="Headlines" />
        <Tab label="Weekly" />
        <Tab label="Radar" />
      </Tabs>
    </Paper>
  );
}

export default CenteredTabs;