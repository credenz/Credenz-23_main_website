import React from 'react'
import Button from 'react-bootstrap/Button';
import './sessions.css'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import wallstreet from './eee.png'

export const Sessions = () => {
  const [sessions, setSessions] = useState([
    {
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },
    {
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },{
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },{
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },{
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },{
      image: wallstreet,
      title: 'Wallstreet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1
    },
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