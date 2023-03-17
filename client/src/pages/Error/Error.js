import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"
const Error = () => {
  return (
    <div className="errorpage">
    <div class="flex-container">
  <div class="text-center">
    <h1>
      <span class="fade-in" id="digit1">4</span>
      <span class="fade-in" id="digit2">0</span>
      <span class="fade-in" id="digit3">4</span>
    </h1>
    <h3 class="fadeIn">PAGE NOT FOUND</h3>
    <NavLink to='/' >
    <button type="button" name="button">Return To Home</button>
    </NavLink>
  </div>
</div>
</div>
  )
}

export default Error