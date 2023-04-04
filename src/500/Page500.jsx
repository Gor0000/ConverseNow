import React from 'react'
import './Page500.css'
import { NavLink } from "react-router-dom";

function Page500() {
  return (
    <div className="page500Container">
    <div className="page500Wrapper">
      <h1>500</h1>
      <p>Oops! Something went wrong.</p>
      <NavLink to={'/Home'}>Go to home</NavLink>
    </div>
  </div>
  )
}

export default Page500