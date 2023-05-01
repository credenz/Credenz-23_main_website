import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Scrollbars from "react-custom-scrollbars-2";
import axios from "axios";
import "./Events.css";
import Loader from "../../Components/loader/Loader";
import CLASH from "../../images/clash.png";
import RC from "../../images/rc.png";
import NTH from "../../images/nth.png";
import WALLSTREET from "../../images/wallstreet.png";
import BPLAN from "../../images/bplan.png";
import ENIGMA from "../../images/enigma.png";
import DATAWIZ from "../../images/datawiz.png";
import QUIZ from "../../images/quiz.png";
import PAPER from "../../images/paper.png";
import CRETRONIX from "../../images/cretronix.png";
import PIXELATE from "../../images/pixelate.png";
import WEB from "../../images/webwever.png";
// import {Clash,RC,NTH,WALLSTREET,BPLAN,ENIGMA,DATAWIZ,QUIZ,PAPER,CRETRONIX,PIXELATE,WEB} from '../../images';
import { useCartContext } from "../../context/cart_context";
// import EventSky from "./EventSky";
import Requests from "../../api/requests";

const Events = () => {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const { cart, addtocart,loginStatus } = useCartContext();
  const [Details, setDetails] = useState(0);
  const [eventid, seteventid] = useState();
  const eventslist = [
    { logo: CLASH, title: "Clash", id: 101 },
    { logo: RC, title: "Reverse Coding", id: 102 },
    { logo: NTH, title: "NTH", id: 103 },
    { logo: WALLSTREET, title: "Wallstreet", id: 104 },
    { logo: BPLAN, title: "B-Plan", id: 105 },
    { logo: ENIGMA, title: "Enigma", id: 106 },
    { logo: DATAWIZ, title: "Datawiz", id: 107 },
    { logo: QUIZ, title: "Quiz", id: 108 },
    { logo: CRETRONIX, title: "Cretronix", id: 109 },
    { logo: WEB, title: "Web Weaver", id: 110 },
  ];
  const [details, setdetails] = useState([]);
  const [purchasedEvents, setPurchasedEvents] = useState([]);

  const customStyles = {
    overlay: {
      zIndex: "1000",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "transparent",
      border: "none",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
      border: "none",
      padding: "0px",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  //   const openmodal =(id)=>{
  //     seteventid(id);
  // }

  function openModal(id) {
    seteventid(id);
    console.log("open model id:", id);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setDetails(0);
  }
  const eventList = async () => {
    await Requests.events()
      .then((res) => {
        console.log(res.data);
        setdetails(res.data);
      })
      .catch((err) => console.log(err));
    if(loginStatus){
      await Requests.profile()
      .then((res)=>{
        let arr = []
        console.log(res.data.orders)
        for(let i of res.data.orders){
          arr.push(i.event.event_id)
        }
        setPurchasedEvents(arr)
        console.log(arr)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  };
  useEffect(() => {
    eventList();
  }, []);
  // useEffect(() => {
  //   // setTimeout(()=>{
  //   //     setLoaderStatus(false);
  //   // },1000)
  // },[]) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     setLoaderStatus(false);
  //   });
  // }, []);
  return loaderStatus ? (
    <Loader />
  ) : (
    <>
      {/* <EventSky> */}
      <div className="st">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="eventpage " 
        // data-aos="fade-in" data-aos-duration="400"
        >
          <div className="container ">
            <h1 style={{ textAlign: "center" }}>EVENTS</h1>
            <div className="main">
              {eventslist.map((list) => (
                <div
                  className="outer"
                  data-aos="zoom-in"
                  key={list.id}
                  onClick={() => openModal(list.id)}
                >
                  <div className="wrapper-new">
                    <div className="container-new">
                      <img
                        src={list.logo}
                        alt=""
                        className="event-icon"
                        style={{
                          height: "70px",
                          width: "70px",
                          marginBottom: "0",
                        }}
                      />
                      <div className="card-title">{list.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </EventSky> */}
      </div>
      {/* </EventSky> */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        // contentLabel="Example Modal"
      >
      {console.log(typeof(details))}
        {details.map((data) => {
          if (eventid && data.id === eventid)
            return (
              <div
                className="modal-content"
                key={data.id}
                data-aos="fade-in"
                data-aos-duration="500"
              >
                <div className="modalclose">
                  <div className="">
                    <button onClick={closeModal}>
                      <i class="fa fa-times cross" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <div className="modalimage">
                  <img src={eventslist[data.id - 101].logo} alt="" />
                </div>
                <p>{data.heading}</p>
                <div className="modalbutton">
                  <button
                    className={Details === 0 ? "active" : "hover "}
                    onClick={() => setDetails(0)}
                  >
                    Info
                  </button>
                  <button
                    className={Details === 1 ? "active" : "hover "}
                    onClick={() => setDetails(1)}
                  >
                    Rules
                  </button>
                  <button
                    className={Details === 2 ? "active" : "hover "}
                    onClick={() => setDetails(2)}
                  >
                    Structure
                  </button>
                  <button
                    className={Details === 3 ? "active" : "hover "}
                    onClick={() => setDetails(3)}
                  >
                    Contact
                  </button>
                  
                  {/* <button onClick={() => setDetails(3)}>Create Team</button> */}
                </div>

                <div className="modalbody info  ">
                {Details === 0?<div>
                  <p className="text-center"> {data.body}</p>
                    <br />
                  <h5 className="text-center" >Timings</h5>
                  {data.datetime.map((time)=>(
                    <div className="text-center" >
                    <p>{time}</p>
                    </div>
                   
                  ))}

                    <br />
                  <h5 className="text-center">Prizes</h5>
                  
                        {/* {data.prizes.map((prize)=>(
                          <div className="text-center">
                          
                    <p>{prize.1}</p>
                    <p>{prize.2}</p>
                          </div>
                    
                  ))} */}
                  {data.prizes.map((prize)=>(<ul className="text-center" style={{listStyle:"none", padding:"0"}} >
                    {Object.values(prize).map((val)=>(
                      <li>{val}</li>
                    ))}
                  </ul>))}
                </div>:<></>}
                  <p>
                    {Details === 1 && data.rules ? (
                      <ol>
                        {Object.values(data.rules).map((value, index) => {
                          return <li>{value}</li>;
                        })}
                      </ol>
                    ) : (
                      <></>
                    )}
                  </p>
                  <p >
                    {Details === 2 && data.structure ? (
                      typeof data.structure !== "string" ? (
                        <ol>
                          {Object.values(data.structure).map((value, index) => {
                            return <li>{value}</li>;
                          })}
                        </ol>
                      ) : (
                        data.structure
                      )
                    ) : (
                      <></>
                    )}
                  </p>
                  
                  {/* contact */}
                  {Details === 3 && <div>
                  
                  {data.contact.map((contact)=>(
                    <div className="text-center" style={{margin:"10px"}} >
                    <p >{contact.name}</p>
                    <p>{contact.phone}</p>
                    </div>
                  ))}
                </div>}
                </div>
                <div className="grp">
                  <div className="team"> Event size : {data.team}</div>
                 
                </div>

                <div className="addtocart">
                <div className="cost">
                <p>Event Cost : <i className="fa fa-inr"> </i>
                    {data.amount}</p>
                    
                  </div>
                  {data.id===103?<a href="https://nth.credenz.in/register" target="_blank"> <button className={`addtocart`}>Register</button></a>:
                  purchasedEvents.includes(data.id.toString())? <button disabled={true} className={`addtocart disabled`}>Registered</button>:
                  <button
                    disabled={
                      cart != null
                        ? cart.find((item) => item.id === data.id)
                          ? true
                          : false
                        : false
                    }
                    className={` addtocart ${
                      cart != null
                        ? cart.find((item) => item.id === data.id)
                          ? "disabled"
                          : ""
                        : ""
                    }`}
                    onClick={() =>
                      addtocart(
                        data.id,
                        eventslist[data.id - 101].logo,
                        data.heading,
                        data.amount
                      )
                    }
                  >
                    {/* Add to cart */}
                    {console.log(data.id.toString(), "looo")}
                    { (cart.find((item) => item.id === data.id)
                          ?  <>Added To cart</>
                          : <>Add to cart</>)}
                  </button>
                }
                  {/* <button>CHECKOUT</button> */}
                </div>
                {/* <div className="modalclose">
                <button  onClick={closeModal}>CLOSE</button>
                </div> */}
              </div>
            );
        })}
      </Modal>
    </>
  );
};

export default Events;
