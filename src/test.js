import "./Login.css";
import React, { useEffect } from "react";
import logo from "./images/logo.png";
import { auth, provider } from "./firebase"; 
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import GoogleButton from "react-google-button";
import Button from "@mui/material/Button";
import { styled, Box } from "@mui/system";
import { Modal } from "@mui/material";
import { Input } from "@mui/material";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Login() {
  const [state, dispatch] = useStateValue();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((auth) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if(authUser.displayName){
        }
        else{
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);
  




  const signUp = (event) => {
    event.preventDefault();



    

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: auth.user.displayName,

      })
      console.log(auth);
    }).catch((error) => alert(error.message));
    
  };

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: auth.user.displayName,

      })
      console.log(auth);
    }).catch((error) => alert(error.message));
  };




  const signInGoogle = () => {
    // Sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };


 
  return (
    <div className="login">



      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <form className="login__signup">
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </Box>
      </Modal>





      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>

      {/* {()=>{signIn()}} */}
      <div className="login__container">
        <Button onClick={handleOpen}>Sign Up</Button>
        <GoogleButton onClick={signInGoogle} />
      </div>
    </div>
  );
}

export default Login;
