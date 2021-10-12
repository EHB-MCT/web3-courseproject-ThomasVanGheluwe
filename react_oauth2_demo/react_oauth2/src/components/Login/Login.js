import React from 'react';
import {GoogleLogin} from "react-google-login";
import env from "react-dotenv";
import axios from 'axios';


const Login = () => (
  <div>
      <GoogleLogin
      clientId={env.CLIENT_ID}
      onSuccess={loginSucces}
      onFailure={loginFailed}
      prompt="select_account"
      />
  </div>
);


const loginSucces = (res) => {
  console.log("Login succes, user: ", res.profileObj);
  let userInfo = {
    name: res.profileObj.name,
    email: res.profileObj.email
  }
  //Check if account exists in the database
  axios.post('http://localhost:1616/accountExist', {
      "email": userInfo.email
    }
  )
  .then(res =>{
    if(res.data != null)
    console.log("Account already exists in database: ", res.data);
    //if account does not exist, add it to the database
    if(res.data === null){
  axios.post('http://localhost:1616/createObject', userInfo)
  .then(res => {
    console.log("Account added to database: ", res.data);
  });
}
  });
}

const loginFailed = (res) => {
  console.log("Login failed: ", res);
}


export default Login;
