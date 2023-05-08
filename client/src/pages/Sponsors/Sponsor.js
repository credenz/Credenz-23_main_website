import React, { useState } from 'react'
import "./Sponsor.css";
import Esspressif from "./esspressif.png";
import Pubmatic from "./pubmatic.png"

const Sponsor = () => {
    const [sponsor,setsponsor]= useState([
        {
        id:1,
        image :Pubmatic,
    },
  //   {
  //       id:2,
  //       image :Esspressif,
  //   },
  //   {
  //       id:3,
  //       image :Esspressif,
  //   },
  //   {
  //     id:3,
  //     image :Esspressif,
  // },

])
    return (
        <>
          <div className="about">
            
            <div className="container ">
  
            
    
              <div className="our-clients"  >
              <h1 style={{marginBottom:"20px",fontSize:"4 rem"}} >Title Sponsor</h1>
              <ul>
              {sponsor.map((sponsors)=>(
                <li key={sponsors.id}  >
                  {" "}
                  <img src={sponsors.image} alt="" /> <img src={sponsors.image} alt="" />{" "}
                </li>
          ))}
               
              </ul>

           
            </div>
            </div>
          </div>
        </>
      );
}

export default Sponsor