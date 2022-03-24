import './Login.css';
import React from 'react'
import logo from "./images/logo.png";
import { Button } from '@mui/material';
import  { auth , provider } from './firebase';

function Login() {

    const signIn=()=>{
        // Sign In
        auth
        .signInWithPopup(provider)
        .then(result => {
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