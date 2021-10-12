import React from 'react';
import {GoogleLogin} from "react-google-login";
import env from "react-dotenv";


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
}

const loginFailed = (res) => {
  console.log("Login failed: ", res);
}


export default Login;
