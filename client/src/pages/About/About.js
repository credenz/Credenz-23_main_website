import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Clash from "../../images/clash.png";
const About = () => {
  return (
    <>
    <div className="about">
    <div className="banner">
        <h1 className="text-center text-glow"  data-aos="fade-in" data-aos-duration="600" >About Us</h1>
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
            <div className="image-ab"  
            >
              <div className="left-1">
                <div>
                  <img className="abimg" src={Clash} alt="" />
                </div>
              </div>
              <div className="right-1">
                <div>
                  <h2 style={{textAlign:"center"}} >CREDENZ</h2>
                  <p>
                  Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents.
                  </p>
                </div>
              </div>
            </div>

            <div className="image-ab"  >
              <div className="left-2">
                <div>
                  <h2 style={{textAlign:"center"}} >PICT IEEE Student Branch (PISB)</h2>
                  <p>
                  PICT IEEE Student Branch (PISB) was established in the year 1988 with an aim of inculcating a sense of technical awareness amongst its student members. PISB aims to escalate the knowledge and trends in the diverse fields of technologies amongst its members. PISB upholds two major events every year - Credenz and Credenz Tech Dayz with the first one being conducted in odd semester and the latter one in even semester. PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for the empowerment of women.
                  </p>
                </div>
              </div>

              <div className="right-2">
                <div>
                  <img src={Clash} alt="" />
                </div>
              </div>
            </div>

            <div className="image-ab"  >
              <div className="left-3">
                <div>
                  <img src={Clash} alt="" />
                </div>
              </div>
              <div className="right-3">
                <div>
                  <h2 style={{textAlign:"center"}} >PICT IEEE NEWSLETTER GROUP (P.I.N.G.)</h2>
                  <p>
                  P.I.N.G. (PICT IEEE Newsletter Group) is the annual technical magazine published by the student members of PICT IEEE Student Branch (PISB). P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe. It also features interviews of distinguished personalities in various technical domains. P.I.N.G. aims at keeping its readers updated on recent developments in technology and helps them extrapolate their perceptions to contemporary ideas of modernisation. With the imminent Issue 16.1, be ready to get P.I.N.G.'d!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-clients" data-aos="fade-down" >
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
        </div>
      </div>
      </div>
    </>
  );
};
export default About;
