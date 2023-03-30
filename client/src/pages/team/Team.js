import React, { useState } from 'react'
import "./Team.css"
import Clash from "../../images/clash.png";
import Yash from "./yash.jpeg"
import Chinmay from "./chinmay.jpeg"
import Devraj from "./devraj.jpg"
import Shreyas from "./shreyas.jpg"
import Vansh from "./vansh.jpeg"
import Prajwal from "./prajwal.jpeg"
const Team = () => {
  const[ourteam,setourteam] =useState([
    {
      photo:Yash,
      name:"Yash Mali",
      link:"https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-linkedin",
      id:1,
    },
    {
      photo:Chinmay,
      name:"Chinmay Survey",
      link:"#",
      id:2,
    },
    {
      photo:Prajwal,
      name:"Prajwal Toundakar",
      link:"#",
      id:3,
    },
    {
      photo:Vansh,
      name:"Vansh Teppalwar",
      link:"#",
      id:4,
    },
    {
      photo:Shreyas,
      name:"Shreyas Chandolkar",
      link:"#",
      id:5,
    },
    {
      photo:Devraj,
      name:"Devraj Shetake",
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
                <img src={details.photo} alt="" />
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