import React from 'react'
import 'firebase/compat/auth'
import "firebase/compat/firestore"
import firebase from '../firebase'
import { isLoaded } from 'react-redux-firebase';
import { useHistory } from "react-router-dom"

function SignIn() {
  const auth = firebase.auth();
  const history = useHistory();
  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log("Successfully signed up!");
      history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  function doSignOut(){
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      history.push("/signin")
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </>
    )
  } else {
    return(
      <>
        <h1>Sign Out</h1>
        <button onClick={doSignOut}>Sign out</button>
      </>
    )
  }
}

export default SignIn