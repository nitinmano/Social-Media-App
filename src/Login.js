import './css/Login.css';
import React from 'react'
import logo from "./images/logo.png";

import  { auth , provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import GoogleButton from 'react-google-button';

function Login() {
    const [{user}, dispatch] = useStateValue();

    const signIn=()=>{
        // Sign In
        auth
        .signInWithPopup(provider)
        .then(result => {
            localStorage.setItem("name", JSON.stringify(result.user));
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        });
    }
  return (
    <div className="login">
        <div className='login__logo'>
            <img src={logo} alt="logo" />
        </div>

        {/* {()=>{signIn()}} */}
        <GoogleButton  onClick={signIn} />
    </div>
  )
}

export default Login