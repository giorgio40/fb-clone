import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";
function Login() {

  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51
            Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-logo.wine.svg"
          alt=""
        />
        <div>
          <Button type="submit" onClick={signIn}>
            SignIn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
