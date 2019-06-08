import React, { Component } from "react";
import {connect} from 'react-redux';
import { getUser2, deleteUser2,postJob } from '../STORE/ACTION/action';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Student extends Component {
  constructor(){
    super();
    this.state = {
      salary: '',
      coName: '',
      email: '',
      post: ''
    }
  }

  componentDidMount() {
    console.log("event runnig ", this.props.uio)
    this.props.getUsersR();
  }

  deleteItem1 = (row) => {
    console.log("user id: " + row.uid)
    this.props.deleteUser3(row.uid)
    }
    
    changeHandler = e => {
      this.setState({
          [e.target.id]: e.target.value,
      })
  } 
  
  postJob1 = () => {
  
        console.log('posting job');
        this.props.postJob2(this.state);
  }  
  
  showModal = () => {
    document.getElementById('id01').style.display='block'
  }

  closeModal = () => {
    document.getElementById('id01').style.display='none'
  }
    
block = (row) => {
  let id = row.uid
  console.log(id)
  // document.getElementById(row.uid).style.display = 'none'
  document.getElementById(id).style.display='none'

}

    render() {

  console.log(this.props.wer)
    return (

      <div>

<div>
<h2>Modal Login Form</h2>

<button onClick={this.showModal}>
Login
</button>

<div id="id01" className="modal">
  
  <form className="modal-content">
    <div className="imgcontainer">
      <span onClick={this.closeModal} className="close" title="Close Modal">&times;</span>
    </div>

    <div className="container">

    <TextField
          id="post"
          placeholder="POST"
          className={this.props.textField}
          margin="normal"
          onChange={this.changeHandler}
        />
        <br />
    <TextField
          id="salary"
          placeholder="SALARY"
          className={this.props.textField}
          margin="normal"
          onChange={this.changeHandler}
        />
       <br />
    <TextField
          id="email"
          placeholder="EMAIL"
          className={this.props.textField}
          margin="normal"
          onChange={this.changeHandler}
        />
       <br />
    <TextField
          id="coName"
          placeholder="CONTACT"
          className={this.props.textField}
          margin="normal"
          onChange={this.changeHandler}
        />
        <br />
      <button onClick={this.postJob1}>POST</button>
    </div>


  </form>
</div>

</div>

<table className="table table-hover">
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

      {this.props.uio.map((row) => {
        return(
          <tr>
      <th key={row.uid}>{1 + 1}</th>
      <td>
      <Button color="secondary" onClick={() => this.block(row)} className={this.props.button}>
      {row.name}
      </Button></td>
      <td>{row.email}</td>
      <td>{row.contact}</td>
      <td><button type="button" onClick={() => this.deleteItem1(row)} class="btn btn-danger">DELETE</button></td>
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
  console.log(state.root)
  return ({
    uio: state.root.userss,
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getUsersR: () => {
      dispatch(getUser2())
    },
    deleteUser3: (id) => {
      console.log('id user: ', id)
      dispatch(deleteUser2(id))
    },
    postJob2: (opt) => {
      console.log(opt)
      dispatch(postJob(opt))
    }

  });
};

export default withStyles(styles)(connect(mapStateToProp, mapDispatchToProps)(Student));
