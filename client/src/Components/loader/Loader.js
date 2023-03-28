import React from 'react'
import './Loader.css'

export default function Loader(props) {
    console.log(props.progress)
  return (
    <>

<div class="content">
   <div class="planet">
      <div class="ring"></div>
         <div class="cover-ring"></div>
      <div class="spots">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

      </div>
   </div>
   <p>{props.progress}</p>
</div>
    </>
  )
}
