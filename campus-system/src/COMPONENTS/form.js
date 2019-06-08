import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Redirect } from 'react-router-dom'
// import {browserHistory} from 'react-router';

import {addUser} from '../STORE/ACTION/action';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import '../App.css';
// import { userInfo } from 'os';
// import Company from './Company';
// import Student from './Student';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
  }); 

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
        rEmail : '',
        rName : '',
        rLName : '',
        rContact : '',
        rAddress : '',
        rPassword : '',
        opt: '',
        }

    }

    changeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    } 


_saveData = () => {
        console.log('event called', this.state);
        this.props.cvb(this.state);
        this.state.opt === "company" ? (this.props.history.push("/student")) : (this.props.history.push("/company"))
        this.setState({
            rEmail : '',
            rName : '',
            rLName : '',
            rContact : '',
            rAddress : '',
            rPassword : '',
    })


    return(
    document.getElementById("rEmail").value = '',
    document.getElementById("rName").value = '',
    document.getElementById("rLName").value = '',
    document.getElementById("rContact").value = '',
    document.getElementById("rAddress").value = '',
    document.getElementById("rPassword").value = ''
    )}

render() {
    console.log(this.props)
    return( 
    <div id="rForm" className="width"> 
        
    <h1>REGISTER FORM</h1> 

       
    <TextField
          id="rName"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="FIRST NAME"
          className={this.props.textField}
          type="text"
          name="NAME"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rLName"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="LAST NAME"
          className={this.props.textField}
          type="text"
          name="LAST NAME"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rEmail"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="Email"
          className={this.props.textField}
          type="email"
          name="Email"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          type="password"
          id="rPassword"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="PASSWORD"
          className={this.props.textField}
          name="Password"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          type="number"
          id="rContact"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="CONTACT NUMBER"
          className={this.props.textField}
          name="CONTACT NUMBER"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rAddress"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="ADDRESS"
          className={this.props.textField}
          type="text"
          name="ADDRESS"
          margin="normal"
          variant="outlined"
        />

        <br />
        <div onChange={this.changeHandler}>
        <Radio
        checked={this.state.opt === 'company'}
        onChange={this.changeHandler}
        color="secondary"
        id="opt"
        value='company'
          name="gender"
        />COMPANY
        <Radio
        checked={this.state.opt === 'student'}
        onChange={this.changeHandler}
        color="secondary"
        id="opt"
        value='student'
          name="gender"
        />STUDENT

  </div>

<br />
<br /> 

<Button onClick={this._saveData} variant="contained" color="primary" className={this.props.button}>
        REGISTER
      </Button>

   </div>
         )
        } 

}

function mapDispatchToProp(dispatch){
    // console.log('dispatch ', dispatch)
    return({
        cvb: (rObj) => {                
            dispatch(addUser(rObj)) 
        }
    })
}

export default withStyles(styles)(connect(null,mapDispatchToProp)(Form));
