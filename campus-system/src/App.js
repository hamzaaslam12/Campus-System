import React, { Component } from 'react';
import * as firebase from 'firebase'

import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignInPage from './COMPONENTS/signIn';
import Login from './COMPONENTS/loginIn';
import DetailPage from './COMPONENTS/detail'
import Form from './COMPONENTS/form'
import Company from './COMPONENTS/company'
import Student from './COMPONENTS/student'
import Jobs from './COMPONENTS/job'

import store from './STORE/index';

class App extends Component {
      constructor(){
        super();

        var config = {
          apiKey: "AIzaSyBH5rrswPB4wFoGbDVs4Od64Tv82ojt0fM",
          authDomain: "campusrecruitment-28f5c.firebaseapp.com",
          databaseURL: "https://campusrecruitment-28f5c.firebaseio.com",
          projectId: "campusrecruitment-28f5c",
          storageBucket: "campusrecruitment-28f5c.appspot.com",
          messagingSenderId: "907166525486"
        };
        firebase.initializeApp(config);
            }



  render() {
    return (
      <div>
        <h1>CAMPUS SYSTEM</h1>
        <Provider store={store}>

<Router>
<div>
<Route exact path="/" component={SignInPage} />
<Route path="/loginIn" component={Login} />
<Route path="/detail" component={DetailPage} />
 <Route path="/detail/company" component={Company} />
 <Route path="/company" component={Company} />
<Route path="/student" component={Student} />
<Route path="/detail/student" component={Student} />
<Route path="/form" component={Form} />
<Route path="/job" component={Jobs} />
</div>
</Router>

</Provider>

      </div>
    );
  }
}

export default App;