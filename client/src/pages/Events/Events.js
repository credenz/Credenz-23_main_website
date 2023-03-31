import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Scrollbars from "react-custom-scrollbars-2";

import "./Events.css";

import Clash from "../../images/clash.png";
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
import EventSky from "./EventSky";
import Requests from "../../api/requests";

const Events = () => {
  const { cart, addtocart } = useCartContext();
  const [Details, setDetails] = useState(0);
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
    // { logo: PAPER, title: "Paper Presentation", id: "9" },
    { logo: CRETRONIX, title: "Cretronix", id: "9" },
    // { logo: PIXELATE, title: "Pixelate", id: "11" },
    { logo: WEB, title: "Web Weaver", id: "10" },
  ]);

  const [player, setplayer] = useState({
    1: ["", "", ""],
    2: [""],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
  }); //{ 0:[] , 1:[], 2:[]}
  // useEffect(() => {
  //   console.log(player);
  // }, [player]);

  const handleplayerChange = (e, eventId, index) => {
    const { name, value } = e.target;
    // console.log("indexx=", index);
    // console.log("data.id=", eventId);
    let list = [...player[eventId]];
    list[index] = value;
    setplayer(
      Object.assign({}, player, {
        [eventId]: list,
      })
    );
  };

  const handleplayerRemove = (eventId, index) => {
    let list = [...player[eventId]];
    // console.log("index: ",index)
    list.splice(index, 1);
    setplayer(
      Object.assign({}, player, {
        [eventId]: list,
      })
    );
  };

  const handleplayerAdd = (eventId) => {
    setplayer(
      Object.assign({}, player, {
        [eventId]: [...player[eventId], `Player ${player[eventId].length - 1}`],
      })
    );
  };
const handelSubmit = (eventId) =>{
  // console.log("in Submit" , eventId);
  let arr = player[eventId];
  // console.log(arr);
}
  const [details, setdetails] = useState(
    [
      {},
      {
        image: Clash,
        heading: "CLASH",
        body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set of time-bound coding challenges,carefully designed to assess your command over programming in the language of your choice- Python, C or C++. Showcase your technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose.",
        id: "1",
        structure:
          "Carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
        rules : { 1 : "MCQs based on coding concepts in C/C++ and python. (Python, C/C++ for FE and C/C++ for SE, TE and BE)",
        2 : "A 28-minute game for a person or a team of two people.",
        3 : "Teams or players are not allowed to use any IDE or software once the game has started.",
        4 : "You will have 3 lifelines (description will be provided in the game itself).",
        5 : "You are not allowed to switch tabs or close the browser during the game. If you do so, you will be logged out automatically.",
        6 : "The primary marks allotted are +4 if answered correctly and -2 if the answer for a particular question is incorrect. If a question attempted is incorrect, then from the next question +2 marks are allotted for each correctly answered question, else -1 until you get a correct answer for upcoming questions.",
        },
        amount: 50,
        count: 1,
        team: "Maximum 3 players are allowed",
        max: 3,
      },
  
      {
        image: RC,
        heading: "REVERSE CODING",
        body: "A coding competition to test your conceptual understanding of algorithms and programming languages. Combine logic and agility to decipher given patterns and code to decode these sequences to find the final answer.",
        rules : { 1 : "Integer type questions which involve complex mathematical problems which are not easy to solve without coding.",
        2 : "A 30-minute game for a person or a team of two people.",
        3 : "Teams or players are allowed to use any IDE or software after the game has started.",
        4 : "You will have 3 lifelines (description will be provided in the game itself).",
        5 : "You will have two attempts to answer a particular question. In the first attempt, the marking scheme will be +4 0. In the second attempt, the marking scheme will be changed to +2 -2.",
        },
        structure:"To be declared soon!",
        id: "2",
        amount: 20,
        count: 1,
        team: "Maximum 2 players are allowed",
        max: 2,
      },
  
      {
        image : NTH,
        heading : "NETWORK TREASURE HUNT",
        body : "Network Treasure Hunt is an online Treasure Hunt played across the globe. Read between the lines, find the hidden clues and connect the dots. You can use every tool at your disposal. Even with Google and Wikipedia by your side, it's going to be fun and challenging.",
        structure: "Channel your inner Wednesday Addams to solve this great mystery of PISB's very own Nevermore Academy",
        rules : {
          1 : "The questions in this contest have clues and hints in form of images, video, GIFs, audio, and text.",
          2 : "A user can submit their answer after 'question/' in the url by replacing put_your_answer_here, the answer shouldn't contain any spaces.",
          3 : "A correct answer will direct the user to the next question while an incorrect answer will redirect the user to the same question as before.",
          4 : "Top scorers will be visible on a dynamic leaderboard.",
          5 : "Additionally, a user will be awarded keys after solving a question and free keys will be awarded to active users after a certain duration of time.",
          6 : "Keys can be used to claim extra hints for questions further in the hunt.",
          7 : "The cost of the extra hint will be the ceiling function of 1.5 times the level of the current question.",
          8 : "A user can claim only 1 extra hint per question, so use this facility wisely.",
          9 : "After the 24-hour hunt, the one on the top of the leaderboard wins!",
          10 : "The winner will be declared once and there will be no change in our decision. Furthermore, users should play with one account only.",
          },
        id: "3",
        amount : 0,
        count : 1,
        team : "Individual event",
        max : 1,
      },
  
      {
        image : WALLSTREET,
        heading : "WALL STREET",
        body : "'The stock market is a device for transferring money from the impatient to the patient.' - Warren Buffett Interested in learning about the stock market and improving your investment skills? Well you are in luck, as we bring you, 'Wall Street'",
        structure: "Wall Street is a virtual Stock Market where you'll get the chance to simulate investing in the stock market and see how your choices stack up against others. With no real money on the line, you can experiment with different strategies and learn from your successes and failures.",
        rules : {
          1 : "Each participant will be provided with a unique ID and password to log on the Wallstreet website and start playing.He/She is expected to buy stocks and subscribe to IPOs using the cash amount.",
          2 : "IPOs will be floated every day before start of the actual trading days to which participants can subscribe. ",
          3 : "A correct answer will direct the user to the next question while an incorrect answer will redirect the user to the same question as before.",
          4 : "IPO allocation will be visible on the first day of actual trading and will be done on first come first serve basis. So keep an eye on our social media handles for constant updates.",
          5 : "As soon as the market opens at 9:00 AM on the first day, participant can see all the stocks along woth their listing price.",
          6 : "The market will be up from 9:00 AM to 5:00 PM for 3 days.This period is defined as 'day' henceforth in the document.",
          7 : "Any buy bid or sell ask can be made within a margin of ±10% of the current share price.For ex,if the current market price of a share is Rs.100/-,a buy or sell bid can be made from any range between Rs. 90- Rs.110/-",
          8 : "A transaction fee of 1% of total transaction cost will be charged from both the seller and the buyer for every successful transaction between the two.",
          9 : "When a user places a buy bid for the shares of the compay A, the amount he's bidding for will be immedialtely deducted from his account along with the relevant transaction fee of 1%. For ex. if the buyer buys 50 shares for Rs. 106 each share, the cost will be Rs.5300/-. Adding 1% transaction fee the final cost that'll be deducted from the buyer's account will be1.01*5300 = Rs.5353/-. This amount will be immediately deducted, and the user won't be able to access this amount.",
          10 : "The Ranking of the user is decided using a 'Valuation Formula'.Valuation of the user will be 60% of his total asset value in Shares acquired (according to current market prices) + 40% of the cash balance in his account.This total will be termed as the valuation amount.",
          11 : "Only Integral Bids allowed.Decimal values will be invalid.",
          12 : "Participants can be disqualified for MALPRACTICES.",
          13 : "News regarding the listed companies would be displayed every half an hour." 
          },
        id: "4",
        amount : 39,
        count : 1,
        team : "Individual event",
        max : 1,
      },
  
      {
        image : BPLAN,
        heading : "B-PLAN",
        body : "Looking for a thrilling and engaging event that showcases innovation and entrepreneurship? Look no further than B-Plan! Register now for an event as you get to be a deadly Shark Tank!",
        structure: "You'll have a front-row seat to the action and become an actual shark to evaluate business and pitch them!",
        rules : {
          1 : "To be declared soon!"
          },
        id: "5",
        amount : 39,
        count : 1,
        team : "Individual event",
        max : 1,
      },
      
      {
        image: ENIGMA,
        heading: "ENIGMA",
        body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
        structure: {1 : "There will be two rounds.",
        2 : "You need to qualify the threshold score to get into the next round. The threshold will be decided based upon the performance of all the teams.",
        3 : "The decision of the organizer will be final.",
        4 : "There is no negative marking at any stage.",
      },
        rules : { 1 : "Candidates pursuing an Undergraduate program will be allowed to participate. It will be an individual event.",
        2 : "All the participants should follow all the instructions as mentioned in the mail received after registration.",
        3 : "The decision of the organizer will be final.",
        4 : "There is no negative marking at any stage.",
        5 : "ROUND 1:\na. There will be 35 questions in this round.\nb. Time limit is 40 minutes.\nc. For every right answer, you will be awarded points and no negative points for a wrong answer.\nd. The marking scheme will be declared on the day of the event.",
        6 : "ROUND 2:\na. There will be 5 Puzzles and 5 MCQs in this round.\nb. Time Limit is 2 hours\nc. You must claim whenever you are done. Earliest claim with max. score wins.",
        },
        id: "6",
        amount: 50,
        count: 1,
        team: "Maximum 2 players are allowed",
        max: 2,
      },
      
      {
        image: DATAWIZ,
        heading: "DATAWIZ",
        body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
        structure : {1 : "Get ready to set off on a journey to the world of data science.",
        2 : "DataWiz gives you an opportunity to test your machine learning and data analytics skills, work on datasets to analyse and make predictions using your models.",
        3 : "Datawiz is a week-long machine learning competition hosted on Kaggle.",
        4 : "The participants can form teams of up to 3 members and submit their predicted data values.",
        5 : "The team with the highest accuracy on the leaderboard at the end of the week will be declared as winners.",
      },
        rules : { 1 : "Each team of students may consist of a maximum of 3 participants.",
        2 : "One account per participant will be allowed.",
        3 : "Signing In on Kaggle through Multiple accounts is prohibited.",
        4 : "No private sharing outside teams.",
        5 : "Privately sharing code or data outside the teams is not permitted.",
        6 : "Results should be reproducible to be eligible for prizes.",
        },
        id: "7",
        amount: 50,
        count: 1,
        team: "Maximum 2 players are allowed",
        max: 2,
      },
      {
        image: QUIZ,
        heading: "QUIZ",
        body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
        structure : {1 : "General Quiz: It includes everything from robotics to politics. Test your GK!",
        2 : "MELA Quiz: Movies Entertainment Literature and Arts (MELA) is all set to test your knowledge of literature, arts and entertainment. If you are an entertainment lover, this is for you!",
        3 : "BizTech Quiz: If you are passionate about marketing, economics and Business, then BizTech is the ultimate questionnaire you need to answer.",
      },
        rules : { 1 : "Candidate pursuing an undergraduate program at any institute is allowed to participate. Participants are encouraged to maintain a copy of their ID card",
        2 : "Participants can register online on the official Credenz website.",
        3 : "Each team will have a maximum of one participant.",
        4 : "Marking scheme and other rules will be announced on the day of the event itself.",
        },
        id: "8",
        amount: 50,
        count: 1,
        team: "Maximum 2 players are allowed",
        max: 2,
      },
      // {
      //   image: PAPER,
      //   heading: "PAPER PRESENTATION",
      //   body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      //   id: "9",
      //   amount: 50,
      //   count: 1,
      //   team: "Maximum 2 players are allowed",
      //   max: 2,
      // },
      {
        image: CRETRONIX,
        heading: "CRETRONIX",
        body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
        structure : {1 : "Round 1: (Junior and Senior Team)\nIt will consist of Multiple Choice Questions (MCQs) based on theoretical and practical concepts of electronics. There will be 30 questions for a time limit of 30 minutes.",
        2 : "Round 2: (Junior and Senior Team)\nThe participants will be given a problem statement and they are supposed to deduce a solution with the help of a tinkercad simulation environment.\nLINK: https://www.tinkercad.com/dashboard",
      },
        rules : { 1 : "Each team can consist of a maximum of 3 members.",
        2 : "Participants will be provided with credentials to join tinkercad for the 2nd round.",
        3 : "Participants can use datasheets for the components they are using and are supposed to provide a link of the same.",
        },
        id: "9",
        amount: 50,
        count: 1,
        team: "Maximum 2 players are allowed",
        max: 2,
      },
      // {
      //   image: PIXELATE,
      //   heading: "PIXELATE",
      //   body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
      //   id: "11",
      //   amount: 50,
      //   count: 1,
      //   team: "Maximum 2 players are allowed",
      //   max: 2,
      // },
      {
        image : WEB,
        heading : "WEB WEAVER",
        body : "Ever wondered how GSO and other Open-Source programs work? Register now for web-weaver to get a taste!",
        structure: "Tou will get to know all the nitty-gritty details and nuances about web and app development and other tools essential for a developer to know",
        rules : {
          1 : "To be declared soon!",
          },
        id: "10",
        amount : 39,
        count : 1,
        team : "Individual event",
        max : 1,
      }
    ]
  );

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
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setDetails(0);
  }
  // const eventList = async () => {
  //   await Requests.events()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   eventList();
  // }, []);

  return (
    <>
      {/* <EventSky> */}
      <div className="st">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="eventpage " data-aos="fade-in"  data-aos-duration="400" >
          <div className="container " >
            <h1 style={{ textAlign: "center" }}>EVENTS</h1>
            <div className="main">
              {eventslist.map((list) => (
                <div
                  className="outer"
                  // data-aos="zoom-in"
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
        {details.map((data) => {
          if (eventid && data.id === eventid)
            return (
         
              <div className="modal-content" key={data.id} data-aos="fade-in"  data-aos-duration="500" >
                <div className="modalimage">
                  <img src={data.image} alt="" />
                </div>
                <p>{data.heading}</p>
                <div className="modalbutton">
                  <button onClick={() => setDetails(0)}>Info</button>
                  <button onClick={() => setDetails(1)}>Rules</button>
                  <button onClick={() => setDetails(2)}>Stucture</button>
                  {/* <button onClick={() => setDetails(3)}>Create Team</button> */}
                </div>

                <div className="modalbody">
                  <p className="text-center" style={{marginTop:"30px"}} >{Details === 0 && data.body}</p>
                  <p>
                  {
                    Details === 1 && data.rules
                    ?   
                    <ol>         
                    {Object.values(data.rules).map((value, index) => {
                      return (
                        <li>{value}</li>
                      );
                    })}
                    </ol>
                    :
                    <></>
                  }
                  </p>
                  <p >
                  {
                    Details === 2 && data.structure
                    ?
                      typeof(data.structure)!=="string"
                      ?
                      <ol>         
                        {Object.values(data.structure).map((value, index) => {
                          return (
                            <li>{value}</li>
                          );
                        })}
                    </ol>
                      :
                      data.structure
                    :
                    <></>
                  }
                  </p>
                  {/* {Details === 3 && (
                    <div className="members">
                      <p>{data.team}</p>
                      <form className="" autoComplete="off">
                        <div className="form-field">
                          <label htmlFor="player">player(s)</label>
                          {player[data.id].map((singleplayer, index) => {
                            if (
                              singleplayer == undefined ||
                              singleplayer == null 
                            )
                              return;
                            return (
                              <div key={index} className="players">
                                <div className="first-division">
                                  <input
                                    name="player"
                                    type="text"
                                    id="player"
                                    placeholder="Player name"
                                    value={singleplayer}
                                    onChange={(e) =>
                                      handleplayerChange(e, data.id, index)
                                    }
                                    required
                                  />
                                  
                                </div>
                                <div className="second-division">
                                  {player[data.id].length !== 1 && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleplayerRemove(data.id, index)
                                      }
                                      className="remove-btn"
                                    >
                                      <span>Remove</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                          {data.max> player[data.id].length   && (
                                    <button
                                      type="button"
                                      onClick={() => handleplayerAdd(data.id)}
                                      className="add-btn"
                                    >
                                      <span>Add a player</span>
                                    </button>   
                                  )}
                        </div>
                        
                        <div className="output">
        <h2>Output</h2>
        {player &&
          player.map((singleplayer, index) => (
            <ul key={index}>
              {singleplayer.player && <li>{singleplayer.player}</li>}
            </ul>
          ))}
      </div>
                        
                      </form>
                    </div>
                  )} */}
                </div>

                {/* <div className="modalbutton">
                  <button
                    disabled={
                      cart != null
                        ? cart.find((item) => item.id === data.id)
                          ? true
                          : false
                        : false
                    }
                    className={`  ${
                      cart != null
                        ? cart.find((item) => item.id === data.id)
                          ? "disabled"
                          : ""
                        : ""
                    }`}
                    onClick={() =>
                      addtocart(data.id, data.image, data.heading, data.amount)
                    }
                  >
                    ADD TO CART
                  </button>
                  <button>CHECKOUT</button>
                  <button
                  
                  onClick={() =>
                      handelSubmit(data.id)
                    }
                  >SUBMIT</button>
                </div> */}
                <button onClick={closeModal}>CLOSE</button>
              </div>
              
            );
        })}
      </Modal>
    </>
  );
};

export default Events;
