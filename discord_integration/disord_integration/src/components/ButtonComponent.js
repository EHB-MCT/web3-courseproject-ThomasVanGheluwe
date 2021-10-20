import React from "react";

export default function ButtonComponent(props) {
    return(
        <div>
        <img src={props.logo} width="5%" alt="logo" onClick={props.state}/>
        </div>
    )
}