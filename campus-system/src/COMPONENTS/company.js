import React, { Component } from "react";
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../App.css';
import { getUser1, deleteUser1 } from '../STORE/ACTION/action';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


class Donors extends Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    console.log("event runnig")
    this.props.getUsers();
  }

  deleteItem = (row) => {
    console.log("user id: " + row.uid)

    this.props.deleteUser(row.uid)
  }

  changeHandler = e => {
    this.setState({
        [e.target.id]: e.target.value,
    })
} 

render() {
  console.log(this.props.wer)
    return (

      <div>

     <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">CONTACT</th>
      <th scope="col">FUNCTIONS</th>
    </tr>
  </thead>
  <tbody>
      {this.props.xyz.map((row) => {
        return(
          <tr>
      <th key={row.uid}>{1 + 1}</th>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.contact}</td>
      <td><button type="button" onClick={() => this.deleteItem(row)} class="btn btn-danger">DELETE</button></td>
          </tr>
        )
      })}

  </tbody>
</table>

      </div>
    )
};
}

function mapStateToProp(state) {
  return ({
    xyz: state.root.users,
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getUsers: () => {
      // console.log(getUser1())
      dispatch(getUser1())
    },

    deleteUser: (id) => {
      console.log('id user: ', id)
      dispatch(deleteUser1(id))
    },

  });
};

export default withStyles(styles)(connect(mapStateToProp, mapDispatchToProps)(Donors));

