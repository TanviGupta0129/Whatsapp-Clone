import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import {useStateValue} from './StateProvider'

function Login() {
  const[{}, dispatch] = useStateValue();
  
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <h1>
        <div className="login__container">
          <img src="https://i.pinimg.com/originals/27/d2/68/27d26873930bb723a9e1ee6de6f5d761.png" alt=""/>

          <div className="login__text">Sign in to Whatsapp</div>

          <Button onClick={signin}>Sign In With Google</Button>
        </div>
      </h1>
    </div>
  );
}

export default Login;
