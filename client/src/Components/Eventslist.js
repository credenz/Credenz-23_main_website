import React, { useState } from 'react'
import Clash from "../images/clash.png";
import RC from "../images/rc.png" 



const Eventslist = ({eventsbody}) => {
  const [Details, setDetails] = useState(0)
  const [details,setdetails]=useState([
    {},
    {
      image:Clash,
      heading:"CLASH",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"1",
      structure:"IN STRUCTURE",
      rules:"RUKES"

    
    },
  
    {
      image:RC,
      heading:"REVERSE CODING",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"2",
    },


    {
      image:RC,
      heading:"REVERSE 3",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"3",
    },

    {
      image:RC,
      heading:"REVERSE 4",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"4",
    },

    {
      image:RC,
      heading:"REVERSE 5",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"5",
    },
    {
      image:RC,
      heading:"REVERSE 6",
      body:"Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id:"6",
    },
  
  ])
  return (
    <div class="centerevent">

    {details.map((details , id)=>{
      if(eventsbody == id)
      {
      return(
        <>

        
        <div class="row" key={details.id} >
      <div class="eventimg">
        <img src={details.image} alt="" />
      </div>
      <div class="eventhead">
        <h2>{details.heading}</h2>
      </div>
    </div>
    <div class="row">
      <div class="buttons">
        <button onClick={()=> setDetails(0)} >Info</button>
        <button onClick={()=> setDetails(1)} >Rules</button>
        <button onClick={()=> setDetails(2)} >Stucture</button>
      </div>
    </div>
    <div class="row">
      { Details==0 && details.body}
      { Details==1 && details.rules}
      { Details==2 && details.structure}
      {/* { details==3 && details.info} */}
      <div class="addtocart">
        <button>Add to cart</button>
      </div>
    </div>
    </>
      )
      }
    })}
   
  </div>
  )
}

export default Eventslist