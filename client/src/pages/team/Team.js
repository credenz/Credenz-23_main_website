import React, { useState } from 'react'
import "./Team.css"
import Clash from "../../images/clash.png";
import Yash from "./yash.jpeg"
import Chinmay from "./chinmay.jpeg"
import Devraj from "./devraj.jpg"
import Shreyas from "./shreyas.jpg"
import Vansh from "./vansh.jpg"
import Prajwal from "./prajwal.jpeg"
const Team = () => {
  const[ourteam,setourteam] =useState([
    {
      photo:Yash,
      name:"Yash Mali",
      link:"https://www.linkedin.com/in/yash-mali-b8886a217",
      id:1,
    },
    {
      photo:Chinmay,
      name:"Chinmay Surve",
      link:"https://www.linkedin.com/in/chinmay-surve-557433218/",
      id:2,
    },
    {
      photo:Prajwal,
      name:"Prajwal Toundakar",
      link:"https://www.linkedin.com/in/prajwal-toundakar-90017a204",
      id:3,
    },
    {
      photo:Vansh,
      name:"Vansh Teppalwar",
      link:"https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/",
      id:4,
    },
    {
      photo:Shreyas,
      name:"Shreyas Chandolkar",
      link:"https://www.linkedin.com/in/shreyaschandolkar",
      id:5,
    },
    {
      photo:Devraj,
      name:"Devraj Shetake",
      link:"https://www.linkedin.com/in/devraj-shetake-439606206/",
      id:6,
    },
  ])
  return (
    <>
      <div className="teampage">
        <div className="container"          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
        <div className="team">
          <h1>Our Team</h1>
          <div className="cards" >
          

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