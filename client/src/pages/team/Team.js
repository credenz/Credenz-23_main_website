import React from 'react'
import "./Team.css"
import Clash from "../../images/clash.png";

const Team = () => {
  return (
    <>
      <div className="teampage">
        <div className="container">
        <div className="team">
          <h1>Our Team</h1>
          <div class="cards">
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="card">
              <div class="thumb">
                <img src={Clash} alt="" />
                <div class="social">
                  <a href="#" class="share-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <h2>James</h2>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Team