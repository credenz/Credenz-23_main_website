import React from "react";
import Cname from "./Cname";
import Nidhi from "./nidhi.jpg"
import Harsh from "./harsh.png"
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-one" >
      <Cname />
      <section>
        <div class="row">
          <div class="column">
            <div class="card"  data-aos="zoom-out" >
              <div class="img-container">
                <img
                  src={Nidhi}
                  alt=""
                />
              </div>
              <h3>kim Jong</h3>
              <div class="icons">
                <a href="/#" alt="">
                  <i class="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

        

          <div class="column">
            <div class="card"  data-aos="zoom-out" >
              <div class="img-container">
                <img
                  src={Harsh}
                  alt=""
                />
              </div>
              <h3>xi jinping</h3>

              <div class="icons">
                <a href="/#" alt="">
                  <i class="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card"  data-aos="zoom-out" >
              <div class="img-container">
                <img
                  src={Harsh}
                  alt=""
                />
              </div>
              <h3>Chu</h3>

              <div class="icons">
                <a href="/#" alt="">
                  <i class="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container"  >
          {/* feedback form  */}

          <div className="form-container" data-aos="fade-right" >
            <h3>FeedBack</h3>
            <form action="" className="contact-form">
              <input type="text" placeholder="Enter Name" required />
              <input
                type="email"
                id=""
                name=""
                placeholder="Enter Email"
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message"
              ></textarea>
              <input type="submit" value="submit" class="send-button" />
            </form>
          </div>
          {/* map */}
          <div className="map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304775421915!2d73.84210028503307!3d18.457541900113636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1678165753590!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
