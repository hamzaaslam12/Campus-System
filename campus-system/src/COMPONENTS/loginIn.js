import React, { Component } from "react";
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { Link, NavLink } from "react-router-dom";
// import * as firebase from "firebase";
// import PersonalDetail from "./personalDetails";
import {loginUser} from '../STORE/ACTION/action';
import '../App.css';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});



class LoginInPage extends Component {
        constructor(props){
          super(props);
          this.state = {
            Lemail: '',
            Lpassword: ''
          }
        }
  
        changeHandler = e => {
          this.setState({
              [e.target.id]: e.target.value
          })
      } 

      loginIn = () => {
        // console.log(this.props.history)
        console.log('event called', this.state);
        this.props.jkl(this.state);

          if(this.state.Lemail === "admin@admin.com"){
            console.log("admin")
            return (
            this.props.history.push('/detail'),
            document.getElementById("Lemail").value = '',
            document.getElementById("Lpassword").value = '',
            this.setState({
            Lemail : '',
            Lpassword : ''
        })
            )}
          else{
            console.log('not admin')
            return (
            this.props.history.push('/form'),
            document.getElementById("Lemail").value = '',
            document.getElementById("Lpassword").value = ''         
          
            )}


    }

render() {
  return (
    <div id="login" className="width">
      <h1>Login In Page</h1>

      <TextField
          id="Lemail"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="Email"
          className={this.props.textField}
          type="email"
          name="email"
          margin="normal"
          variant="outlined"
        />
      
      <br />

      <TextField
          id="Lpassword"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="Password"
          className={this.props.textField}
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
        />

<br />
<Button onClick={this.loginIn} variant="contained" color="primary" className={this.props.button}>
<i className="material-icons">LOGIN</i>
      </Button>
      </div>
  )
};
}

function mapDispatchToProp(dispatch){
  // console.log('dispatch ', dispatch)
  return({
      jkl: (obj2) => {
        console.log(obj2)             
          dispatch(loginUser(obj2)) 
      }
  })
}


export default withStyles(styles)(connect(null,mapDispatchToProp)(LoginInPage));
