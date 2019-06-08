import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// import { getUser1, deleteUser1 } from '../STORE/ACTION/action';
import Company from './company'
import Student from './student'
import Jobs from './job'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: 10
  },
  bar: {
    // margin: 30,
    paddingLeft: 300,
    paddingRight: 300
  }
});

class ShowList extends Component {
      constructor(){
        super();
        this.state = {
          value: 0
        }
      }


      handleChange = (event, value) => {
        this.setState({ value });
      };
    
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
<div className={classes.root}>
        <AppBar className={classes.bar} position="static" >
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="STUDENTS" />
            <Tab label="COMPANY" />
            <Tab label="JOBS" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Student /></TabContainer>}
        {value === 1 && <TabContainer><Company /></TabContainer>}
        {value === 2 && <TabContainer><Jobs /></TabContainer>}
      </div>

      </div>
    )
  }

};

export default withStyles(styles, { withTheme: true })(ShowList);