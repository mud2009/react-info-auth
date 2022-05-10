import React from 'react'
import firebase from "../firebase"

function Navbar() {
  const user = firebase.auth().currentUser;
  let signIn = null;
  if (user !== null){
    signIn = user.email;
  } else {
    signIn = "Sign In"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Info Site
          </a>
        </li>
      </ul>
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item">
          <a className="nav-link" href="/signin">{signIn}</a>
        </li>
      </ul>
      {/* <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link> */}
    </nav>
  )
}

export default Navbar