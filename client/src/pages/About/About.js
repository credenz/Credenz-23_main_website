import React, { useEffect } from "react";

import "./About.css";
import { motion } from "framer-motion";
import Logo from "./credenz23.png";
import Ping from "./ping.jpg";
import Credenz from "./credenz.jpg";
const About = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);
  return (
    <>
      <div className="about">
        <div className="banner">
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-center"
          >
            About Us
          </h1>
        </div>
        <div className="container ">
          {/* <div className="about-ctd text-center">
          <img src={Clash} alt="" />
          <div className="content">
            <p id="content">
              <strong> Credenz Tech Dayz </strong>is an intra-college annual
              techfest organized by the PICT IEEE Student Branch where the
              brightest minds of PICT compete in technical as well as
              non-technical events. Participants get a chance to test their
              logical aptitute and problem solving skills in events like like
              National Computing Contest and Reverse Coding. The Network
              Treasure Hunt is an online cryptic hunt that challenges you to use
              every tool at your disposal and piece together every bit of the
              puzzle. Inquisitive is a mind-boggling test to question your wits
              and test your general knowledge. This is a chance for the students
              to go beyond the traditional spheres of academics and make the
              most of their potential.
            </p>
          </div>
        </div> */}
          <div className="aboutus ">
            <div className="ieee">
              <div
                className="image-ab"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="left-1">
                  <div>
                    <img className="abimg" src={Logo} alt="" />
                  </div>
                </div>
                <div className="right-1">
                  <div>
                    <h2 style={{ textAlign: "center" }}>CREDENZ</h2>
                    <p>
                      Credenz, organized by the PICT IEEE Student Branch, is an
                      annual technical festival that began in 2004. It has
                      become one of Pune's premier technical events, aiming to
                      inspire participants to bring out their best. Credenz
                      offers a diverse range of seminars and workshops that help
                      expand participants' knowledge in the ever-evolving field
                      of technology, while also instilling a competitive spirit
                      among them. With events like Clash, B Plan, WebWeaver,
                      Cretronix, Wall Street, and DataWiz, participants have
                      ample opportunities to explore their talents and succeed.
                      Credenz is a unique opportunity for students to surpass
                      the conventional boundaries of academia and unlock their
                      full potential. The PICT IEEE Student Branch's vision is
                      to promote learning and exploration through Credenz,
                      creating a platform for individuals to nurture their
                      skills and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="image-ab"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="left-2">
                  <div>
                    <h2 style={{ textAlign: "center" }}>
                      PICT IEEE Student Branch (PISB)
                    </h2>
                    <p>
                      PICT IEEE Student Branch or PISB was founded in 1988, with
                      the primary goal of fostering technical awareness and
                      knowledge among its student members. PISB endeavors to
                      keep its members informed about the latest technology
                      trends in various fields. Two significant events are
                      hosted by PISB each year, namely Credenz and Credenz Tech
                      Dayz. Credenz is conducted in even semesters, while
                      Credenz Tech Dayz takes place in odd semesters.
                      Additionally, PISB has a Women in Engineering (WIE)
                      chapter dedicated to empowering women.
                    </p>
                  </div>
                </div>

                <div className="right-2">
                  <div>
                    <img src={Credenz} alt="" />
                  </div>
                </div>
              </div>

              <div
                className="image-ab"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="left-3">
                  <div>
                    <img src={Ping} alt="" />
                  </div>
                </div>
                <div className="right-3">
                  <div>
                    <h2 style={{ textAlign: "center" }}>
                      PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
                    </h2>
                    <p>
                      P.I.C.T. IEEE Newsletter Group or P.I.N.G. is an annual
                      technical magazine that is published by the student
                      members of PICT IEEE Student Branch (PISB). It serves as a
                      platform for technology enthusiasts to showcase their
                      technical expertise. P.I.N.G. features articles on
                      cutting-edge technologies from technocrats worldwide and
                      includes interviews with distinguished personalities in
                      various technical domains. The magazine's primary
                      objective is to keep its readers informed about recent
                      technology advancements and guide them towards
                      modernization. With the upcoming release of Issue 18.1,
                      prepare yourself to be 'P.I.N.G.'d.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="our-clients" data-aos="fade-down" >
          <h1>Our Sponsors</h1>
          <ul>
            <li  data-aos="zoom-out" >
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
            <li   data-aos="zoom-out">
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
            <li  data-aos="zoom-out">
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
            <li  data-aos="zoom-out">
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
            <li  data-aos="zoom-out">
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
            <li  data-aos="zoom-out">
              {" "}
              <img src={Clash} alt="" /> <img src={Clash} alt="" />{" "}
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </>
  );
};
export default About;
