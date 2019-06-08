// import {ADD_USER} from '../ACTION/const'

const INITIAL_STATE = {
          auth: false,
          users: [],
          userss: [],
          logIn: false,
          post: [],
          post1: false,
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type)
  
switch (action.type) {
case "ADD_USER": {
         return ({
           ...state,
          auth: true
          })
}

case 'GETTING_USER': {
  return ({
   ...state,
   users: action.payload
   })
}

case 'GETTING_USERr': {
  return ({
   ...state,
   userss: action.payload
   })
}

case 'POST_JOB': {
  return ({
   ...state,
   post: action.payload
   })
}

case 'POST_JOB11': {
  return ({
   ...state,
   post1: true 
   })
}

case 'LOGIN_USER': {
  return ({
    ...state,
   logIn: true
   })
}

default:
          return state;
}

}