import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div>Welcome to the page</div>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
    </>
  )
}