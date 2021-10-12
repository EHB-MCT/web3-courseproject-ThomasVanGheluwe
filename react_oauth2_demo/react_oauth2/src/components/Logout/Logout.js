import React from 'react';
import GoogleLogout from "react-google-login";
import env from "react-dotenv";


const Logout = () => (
  <div>
    <GoogleLogout
    clientId={env.CLIENT_ID}
    buttonText="Logout"
    onLogoutSucces={logout}
    onLogoutFailure={failure}
    />
  </div>
);

const logout = () => {
  console.log("You are now logged out");
}

const failure = (res) =>{
  console.log("Logout failed: ", res)
}

export default Logout;
