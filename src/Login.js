import './Login.css';
import React from 'react'
import logo from "./images/logo.png";
import { Button } from '@mui/material';
import  { auth , provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn=()=>{
        // Sign In
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result);
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
        <Button type='submit' onClick={()=>{signIn()}}>Sign in
            </Button>
    </div>
  )
}

export default Login