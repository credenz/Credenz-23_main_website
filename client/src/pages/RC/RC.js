import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Scrollbars from "react-custom-scrollbars-2";
import axios from "axios";
import "../Events/Events.css";
import Loader from "../../Components/loader/Loader";
import CLASH from "../../images/clash.png";
import RC_IMG from "../../images/rc.png";
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
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RC.css'
const RC = () => {
  let navigate=useNavigate();
  const [loaderStatus, setLoaderStatus] = useState(false);
  const { cart, addtocart,loginStatus } = useCartContext();
  const [Details, setDetails] = useState(0);
  const [eventid, seteventid] = useState();
  const [input,setInput]= useState();
  const [output,setOutput] = useState('Output will be displayed here');
  const eventslist = [
    { logo: CLASH, title: "2024", id: 1 },
    { logo: RC_IMG, title: "1/2 Prime?", id: 2 },
    { logo: NTH, title: "Xor-bi-Xor ", id: 3 },
    { logo: WALLSTREET, title: "As Key", id: 4 },
    { logo: BPLAN, title: "eye pie ", id: 5 },
    { logo: ENIGMA, title: "We are done :) ", id: 6 },
    // { logo: DATAWIZ, title: "Datawiz", id: 107 },
    // { logo: QUIZ, title: "Quiz", id: 108 },
    // { logo: CRETRONIX, title: "Cretronix", id: 109 },
    // { logo: WEB, title: "Web Weaver", id: 110 },
  ];
  const [details, setdetails] = useState([
    {title:"2024",id:1},
    {title:"1/2 Prime?",id:2},
    {title:"Xor-bi-Xor",id:3},
    {title:"As Key",id:4},
    {title:"eye pie",id:5},
    {title:"We are done :)",id:6},
  ]);

  function isValidNumber(num) {
    // Check that the number is less than 10^5
    if (num < -99999 || num > 99999) {
      return false;
    }
  
    // Check that there are no negative signs between any two digits
    const str = num.toString();
    const len = str.length;
    if (str[0] === '-') {
      for (let i = 2; i < len - 1; i++) {
        if (str[i] === '-') {
          return false;
        }
      }
    } else {
      for (let i = 1; i < len - 1; i++) {
        if (str[i] === '-') {
          return false;
        }
      }
    }
  
    return true;
  }
  
    
  const handleSubmit=()=>{
    // if(isValidNumber(input)){
        console.log('input=',input,typeof(input),' question_number=',eventid,typeof(eventid))
        // const id = props.toast.toast.loading("Please wait...");
        Requests.rc({rc_ques:eventid,rc_input:Number(input)})
        .then((res)=>{
            console.log(res.data);
            // props.toast.toast.update(id, { render: "Output Received", type: "success", isLoading: false, autoClose:5000 });
            setOutput(res.data.rc_output);
            // setOutput()
        })
        .catch((err)=>{
            // props.toast.toast.update(id, { render: 'Error', type: "error", isLoading: false,autoClose:5000 });
        })
    // }
    // else{
    //     prop
    // }
  }
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
    // console.log("open model id:", id);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setOutput('Output will be displayed here');
    setDetails(0);
  }
  
  const eventList = async () => {
    await Requests.events()
      .then((res) => {
        // console.log(res.data);
        setdetails(res.data);
      })
      .catch((err) => {});
    if(loginStatus){
      await Requests.profile()
      .then((res)=>{
        let arr = []
        // console.log(res.data.orders)
        for(let i of res.data.orders){
          arr.push(i.event.event_id)
        }
        setPurchasedEvents(arr)
        // console.log(arr)
      })
      .catch((err)=>{
        // console.log(err)
      })
    }
  };
  useEffect(() => {
    // eventList();
  }, [output]);
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
        {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
        <div className="eventpage " 
        // data-aos="fade-in" data-aos-duration="400"
        >
          <div className="container ">
            <h1 style={{ textAlign: "center" }}>Reverse Coding</h1>
            <div className="main">
              {eventslist.map((list) => (
                <div
                  className="outer2"
                  // data-aos="zoom-in"
                  key={list.id}
                  onClick={() => openModal(list.id)}
                >
                  <div className="wrapper-new">
                    <div className="container-new">
                      {/* <img
                        src={RC_IMG}
                        alt=""
                        className="event-icon"
                        style={{
                          height: "70px",
                          width: "70px",
                          marginBottom: "0",
                        }}
                      /> */}
                      <div className="card-title">Q.{list.id}</div>
                      <div className="card-title">{list.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
            <button className="passBtn" onClick={(e)=>{e.preventDefault();navigate('/payment/pass')}}>Buy Pass</button></div> */}
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
      {/* {console.log(typeof(details))} */}
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

                <h2 >Q.{data.id} {data.title} </h2>
                {/* <div className="modalimage"> */}
                  {/* <img src={eventslist[data.id - 101].logo} alt="" /> */}
                {/* </div> */}
                <p>1) Enter Input and click on submit</p>
                <p>2) Corresponding Output will be displayed on the screen. </p>
                <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                    <div style={{width:'250px'}}>
                        <h5 style={{display:'flex',justifyContent:'center'}}>Input</h5>
                        <input value={input} onChange={(e)=>setInput(e.target.value)} style={{padding:'15px',background:'rgb(4, 23, 31)', height:'120px',width:'250px',border:'0'}} type="number" step="1" placeholder="Enter Input"></input>
                    </div>
                    </Col>
                    <Col md="3"></Col>
                    <Col xs lg="3">
                    <div style={{width:'250px'}}>
                    <h5 style={{display:'flex',justifyContent:'center'}}>Output</h5>
                    <textarea value={output} style={{resize:"none",padding:'15px',background:'transparent', height:'120px',width:'250px'}} type="text" >
                        
                    </textarea>
                    
                    </div>
                    </Col>
                </Row>
                
                </Container>
                <button style={{marginTop:'50px',paddingTop:'10px',paddingBottom:'10px'}} onClick={handleSubmit}>Submit </button>
              </div>
            );
        })}
      </Modal>
    </>
  );
};

export default RC;
