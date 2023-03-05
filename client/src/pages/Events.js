import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import "./Events.css";

import Clash from "../images/clash.png";
import RC from "../images/rc.png";
import NTH from "../images/nth.png";
import WALLSTREET from "../images/wallstreet.png";
import BPLAN from "../images/bplan.png";
import ENIGMA from "../images/enigma.png";
import DATAWIZ from "../images/datawiz.png";
import QUIZ from "../images/quiz.png";
import PAPER from "../images/paper.png";
import CRETRONIX from "../images/cretronix.png";
import PIXELATE from "../images/pixelate.png";
import WEB from "../images/webwever.png";

const Events = () => {
    const [Details, setDetails] = useState(0)
  const [eventid, seteventid] = useState();
  const [eventslist, seteventslist] = useState([
    { logo: Clash, title: "Clash", id: "1" },
    { logo: RC, title: "Reverse Coding", id: "2" },
    { logo: NTH, title: "NTH", id: "3" },
    { logo: WALLSTREET, title: "Wallstreet", id: "4" },
    { logo: BPLAN, title: "B-Plan", id: "5" },
    { logo: ENIGMA, title: "Enigma", id: "6" },
    { logo: DATAWIZ, title: "Datawiz", id: "7" },
    { logo: QUIZ, title: "Quiz", id: "8" },
    { logo: PAPER, title: "Paper Presentation", id: "9" },
    { logo: CRETRONIX, title: "Cretronix", id: "10" },
    { logo: PIXELATE, title: "Pixelate", id: "11" },
    { logo: WEB, title: "Web Weaver", id: "12" },
  ]);

  const [details, setdetails] = useState([
    {},
    {
      image: Clash,
      heading: "CLASH",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "1",
      structure: "carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      rules: "carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
    },

    {
      image: RC,
      heading: "REVERSE CODING",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "2",
    },

    {
      image: NTH,
      heading: "REVERSE 3",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "3",
    },

    {
      image: WALLSTREET,
      heading: "REVERSE 4",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "4",
    },

    {
      image: BPLAN,
      heading: "REVERSE 5",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "5",
    },
    {
      image: ENIGMA,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "6",
    },
    {
      image: DATAWIZ,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "7",
    },
    {
      image: QUIZ,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "8",
    },
    {
      image:PAPER,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "9",
    },
    {
      image: CRETRONIX,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "10",
    },
    {
      image: PIXELATE,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "11",
    },
    {
      image: WEB,
      heading: "REVERSE 6",
      body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      id: "12",
    },
  ]);

  const customStyles = {
    overlay: {
      zIndex: "1000",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "transparent",
      border:"none",
    },
    content: {
      
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
      border:"none",
      padding:"0px",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //   const openmodal =(id)=>{
  //     seteventid(id);
  // }

  function openModal(id) {
    seteventid(id);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div class="st">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div class="eventpage ">
          <div class="container ">
            <h1 style={{ textAlign: "center" }}>EVENTS</h1>
            <div class="main">
              {eventslist.map((list) => (
                <div
                  class="outer"
                  key={list.id}
                  onClick={() => openModal(list.id)}
                >
                  <div class="wrapper-new">
                    <div class="container-new">
                      <img
                        src={list.logo}
                        alt=""
                        class="event-icon"
                        style={{
                          height: "70px",
                          width: "70px",
                          marginBottom: "0",
                        }}
                      />
                      <div class="card-title">{list.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
     
      {details.map((data)=>{
        if (eventid && data.id == eventid)
        return(
            <div className="modal-content" key={data.id} >
            <div className="modalimage">
               <img src={data.image} alt="" />
            </div>
        <p>{data.heading}</p>
        <div className="modalbutton">
        <button onClick={()=> setDetails(0)} >Info</button>
        <button onClick={()=> setDetails(1)} >Rules</button>
        <button onClick={()=> setDetails(2)} >Stucture</button>
        
        </div>
        
        <div className="modalbody">
        <p>{ Details==0 && data.body}</p>
      <p>{ Details==1 && data.rules}</p>
      <p>{ Details==2 && data.structure}</p>
        </div>
        
       
       <div className="modalbutton">
       <button>ADD TO CART</button>
       <button>CHECKOUT</button>
</div>
        <button  onClick={closeModal}>
          CLOSE
        </button>
        </div>
        )
        
        
      })}
       
        
      </Modal>
      
    </>
  );
};

export default Events;
