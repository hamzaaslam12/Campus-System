import Form from '../../COMPONENTS/form'

// import *as firebase from 'firebase';
const firebase = require("firebase");

export function createUser(obj) {
    return dispatch => {
    console.log({obj})
        firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
    .then(
                alert("USER CREATED SUCCESSFULLY!")
    )
    .catch((e) => {
                console.log("error", e);
                switch (e.code) {
                        case 'auth/weak-password':
                        alert(e.message)
                        break;
                        case 'auth/email-already-in-use':
                        alert(e.message)
                        break;
                }
                }) 
                
             dispatch({type: "ADD_USER"})
            }}


export function loginUser(obj2) {
    return dispatch => {
        console.log("action obj2 " + obj2.Lemail)
        firebase.auth().signInWithEmailAndPassword(obj2.Lemail, obj2.Lpassword)
        .then((res) => {  
            console.log(res.user)
          if(res.user.uid) {
            console.log(res.user.uid);
            return(
            // console.log(this.props.history)
            //   <Form />
              alert("USER LOGIN SUCCESSFULLY!")
            )}
            else{
                alert("THE USER MAY NO LONGER BE USABLE!")
            }
        })

        .catch((e) => {
            console.log(e);
            switch (e.code) {
                case "auth/wrong-password": // wrong password on sign in
                    alert(e.message)
                    break;
                case "auth/user-not-found": // user not found on sign in on wrong email
                    alert(e.message)
                    break;
            }
        })
     dispatch({type: "LOGIN_USER"})
    }}


export function addUser(rObj){
        console.log('data:', {rObj})
    if(rObj.opt === 'company'){
    return dispatch => {
        var id = new Date;
        id = id.getMilliseconds();
        console.log(id)
        firebase.database().ref('users/Company/').child(id).set({
            email: rObj.rEmail,
            name: rObj.rName,
            lName: rObj.rLName,
            contact: rObj.rContact,
            uid: id,
            status: rObj.opt,
        })
        
        dispatch({type: "SAVE_USER"});
        alert("USER REGISTERED SUCCESSFULLY!")
        
        }
    }
    else{
       return dispatch => {

            var id = new Date;
            id = id.getMilliseconds();
            return(
                firebase.database().ref('users/Student/').child(id).set({
                    email: rObj.rEmail,
                    name: rObj.rName,
                    lName: rObj.rLName,
                    contact: rObj.rContact,
                    uid: id,
                    status: rObj.opt
                }),
                
                dispatch({type: "SAVE_USER"}),
                alert("USER REGISTERED SUCCESSFULLY!")
            )
            }
        }
        
    }
    

export function getUser1()  {
    // console.log('getuser1 is working ')
        return dispatch => {
                firebase.database().ref(`/users/Company`).on('value', snap => {
                    let users = [];
                    let data = snap.val();
                    console.log(data)
                    for(let key in data){
                      users.push(data[key])  
                    };
                    console.log(users)
                    dispatch({ type: 'GETTING_USER', payload: users })
                })
            };
};

export function getUser2()  {
    // console.log('getuser1 is working ')
        return dispatch => {
                firebase.database().ref(`/users/Student`).on('value', snap => {
                    let userss = [];
                    let data = snap.val();
                    console.log(data)
                    for(let key in data){
                      userss.push(data[key])  
                    };
                    console.log(userss)
                    dispatch({ type: 'GETTING_USERr', payload: userss })
                })
            };
};


export function deleteUser1(id)  {
    console.log("id: ", id)
    return dispatch => {
        
        firebase.database().ref('/users/Company').child(id).remove();
    };
};

export function postJob(data)  {
    console.log("data: ", data)
    return dispatch => {
        
        var id = new Date;
        id = id.getMilliseconds();
        return(
            firebase.database().ref('users/Job/').child(id).set({
                email: data.email,
                coName: data.coName,
                post: data.post,
                salary: data.salary,
                uid: id,
            }),
            
            dispatch({type: "POST_JOB1"}),
            alert("USER REGISTERED SUCCESSFULLY!")
            )
        }
    };
    
    export function getPost()  {
        console.log('getPost is working ')
            return dispatch => {
                    firebase.database().ref(`users/Job/`).on('value', snap => {
                        let posts = [];
                        let data = snap.val();
                        console.log(data)
                        for(let key in data){
                          posts.push(data[key])  
                        };
                        console.log(posts)
                        dispatch({ type: 'POST_JOB', payload: posts })
                    })
                };
    };

    export function deleteUser2(id)  {
    console.log("id: ", id)
        return dispatch => {

        firebase.database().ref('/users/Student').child(id).remove();
};
};

export function filterUser(opt)  {
    console.log("id: ", opt)

    
        firebase.database().ref(`/users/Donor`).on('value', snap => {
            let userss = [];
            let data = snap.val();
            // console.log(data)
            if(opt === "A+"){
            userss.push(data.filter(checkAdult))

            function checkAdult(data) {
              if(data.opt !== "A+" || data.opt !== "A-", data.opt !== "O+" || data.opt !== "O-"){
                  return data
              }
            }
            
        }
        console.log(userss)
            // dispatch({ type: 'GETTING_USERr', payload: userss })
        })

  

        // return dispatch => {

        // firebase.database().ref('/users/Receiver').child(id).remove();
// };
};


