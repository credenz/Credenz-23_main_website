import React, { useState } from "react";
import Cname from "./Cname";
import Nidhi from "./nidhi.jpg"
import Harsh from "./harsh.png"
import "./Contact.css";
import Requests from "../../api/requests";
export default function Contact(props) {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [context,setContext]=useState('')
  const handleFeedback=async()=>{
    const id = props.toast.toast.loading("Please wait...");
      Requests.feedback({email,name,context})
      .then((res)=>{
      props.toast.toast.update(id, { render: "Thank you for your feedback!", type: "success", isLoading: false, autoClose:5000 });
      })
      .catch((err)=>{
      props.toast.toast.update(id, { render: "Error while submitting", type: "error", isLoading: false,autoClose:5000 });
      
      })
  }
  return (
    <div className="contact-one" >
      <Cname />
      <section>
        <div className="row">
          <div className="column">
            <div className="card"  data-aos="zoom-out" >
              <div className="img-container">
                <img
                  src={Nidhi}
                  alt=""
                />
              </div>
              <h3>Nidhi Yadav</h3>
              <div className="icons">
                <a href="tel:+91 8767887493" alt="">
                  <i className="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/nidhi-p-yadav" alt="" target={"_blank"}>
                  <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="mailto:nidhiprashantyadav1904@gmail.com" alt="">
                  <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

        

          <div className="column">
            <div className="card"  data-aos="zoom-out" >
              <div className="img-container">
                <img
                  src={Harsh}
                  alt=""
                />
              </div>
              <h3>Harsh Bhat</h3>

              <div className="icons">
                <a href="tel:+91 8983594252" alt="">
                  <i className="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/harshbhat/" alt="" target={"_blank"}>
                  <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="mailto:harshbhat83@gmail.com" alt="">
                  <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="column">
            <div className="card"  data-aos="zoom-out" >
              <div className="img-container">
                <img
                  src={Harsh}
                  alt=""
                />
              </div>
              <h3>Chu</h3>

              <div className="icons">
                <a href="/#" alt="">
                  <i className="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                <a href="/#" alt="">
                  <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="contact-container"  >
          {/* feedback form  */}

          <div className="form-container" data-aos="fade-right" >
            <h3>FeedBack</h3>
            <form action="" className="contact-form" onSubmit={(e)=>{e.preventDefault();handleFeedback();}}>
              <input type="text" placeholder="Enter Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
              <input
                type="email"
                id=""
                name=""
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder="Enter Email"
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message"
                value={context}
                onChange={(e)=>setContext(e.target.value)}
                required
              ></textarea>
              <input type="submit" value="submit" className="send-button" />
            </form>
          </div>
          {/* map */}
          <div className="map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304775421915!2d73.84210028503307!3d18.457541900113636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1678165753590!5m2!1sen!2sin"
              style={{ border: 0, }}
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
