import React, { useState } from 'react'
import "./Team.css"
import Clash from "../../images/clash.png";

const Team = () => {
  const[ourteam,setourteam] =useState([
    {
      photo:Clash,
      name:"Yash Mali",
      link:"https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-linkedin",
      id:1,
    },
    {
      photo:Clash,
      name:"Yash Mali",
      link:"#",
      id:2,
    },
    {
      photo:Clash,
      name:"Yash Mali",
      link:"#",
      id:3,
    },
    {
      photo:Clash,
      name:"Yash Mali",
      link:"#",
      id:4,
    },
    {
      photo:Clash,
      name:"Yash Mali",
      link:"#",
      id:5,
    },
    {
      photo:Clash,
      name:"Yash Mali",
      link:"#",
      id:6,
    },
  ])
  return (
    <>
      <div className="teampage">
        <div className="container">
        <div className="team">
          <h1>Our Team</h1>
          <div className="cards">
          

          {ourteam.map((details)=>(
            <div className="card" key={details.id} >
              <div className="thumb">
                <img src={Clash} alt="" />
                <div className="social">
                  <a href={details.link} className="share-icon" target="_blank" >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="info">
                <h2>{details.name}</h2>
                {/* <span>Web Developer</span> */}
              </div>
            </div>
          ))}
            
       
          
          
           
            
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Team