import React from 'react'
import Button from 'react-bootstrap/Button';
import './sessions.css'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import wallstreet from './eee.png'
import Changzi from "../../images/changzi.jpeg"
import Srishti from "../../images/srishti.jpeg"
import Herody from "../../images/Herody.png"

export const Sessions = () => {
  const [sessions, setSessions] = useState([
    {
      image: Changzi,
      title: 'Dr. Changzi Li',
      content: 'During the initial lecture of our series, Dr. Li provided a descriptive overview of "Portable Radar Systems for Life Activity Sensing, Anomaly Detection, and Human Tracking." He delved into several technical aspects of radar systems and their uses in mobile applications and medical contexts.',
      date:'Date - 19/04/2023',
      id: 1
    },
    {
      image: Srishti,
      title: 'Ms. Srishti Patil',
      content: `Ms. Patil's presentation enlightened the audience with numerous strategies and techniques for achieving high scores in the CAT examination and gaining admission to top business schools in India and abroad. The session was followed by an engaging Q&A session in which Ms. Patil candidly shared her experiences and addressed various doubts raised by the attendees.`,
      date:'Date - 23/04/2023',
      id: 2
    },{
      image: Herody,
      title: 'Exploring Blockchain and DeFI with meter: A practical workshop',
      content: 'A live blockchain walkthrough with introduction to Decentralized finance and  hands-on interaction with DeFI applications.',
      date:'Date - 03/05 2023',
      id: 3
    }
  ])

  return (
    <>
      <div className="sessionspage">
        <div className="container"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <div className="sessions">
            <h1>Sessions</h1>
            <div className="cards" >
              {sessions.map((details) => (
                <div className="card shadow-lg p-1" key={details.id} >
                  <div className="thumb">
                    <img src={details.image} alt="" />
                  </div>
                  <div className="info">
                    <h2>{details.title}</h2>
                  </div>
                  <div className='content'>
                    <p>
                      {details.content}
                    </p>
                    <p  >
                      {details.date}
                    </p>
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
export default Sessions