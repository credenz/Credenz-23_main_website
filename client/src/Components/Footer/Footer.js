// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <>
//         <footer>
// <div className="footer">

// <div className="row">
// <p>@ PICT IEEE Student Branch</p>
// </div>
// <div className="row">
// <p>Developed By: <Link to={"/team"}><span ><strong> WEB TEAM </strong> </span></Link>  </p> 
// </div>
// <div className="row">
// <div className="row-i">
// <div>
// <a href="https://www.linkedin.com/company/pisbieee/ " target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin "></i></a>
// </div>
// <div>
// <a href ="https://instagram.com/pictieee?igshid=YmMyMTA2M2Y= " target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
// </div>
// <div>
// <a href="https://m.facebook.com/pictieee/" target="_blank" rel="noreferrer"><i className="fa fa-facebook "></i></a>
// </div>
// </div>
// </div>

// {/* <div className="row">
// <ul>
// <li><a href="#">Contact us</a></li>
// <li><a href="#">Our Services</a></li>
// <li><a href="#">Privacy Policy</a></li>
// <li><a href="#">Terms & Conditions</a></li>
// <li><a href="#">Career</a></li>
// </ul>
// </div> */}

// </div>
// </footer>

//     </>
//   )
// }

// export default Footer


import React from "react";
import Scrolltop from "../../pages/Scrolltop/Scrolltop";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Facebook from "../../images/facebook.png";
import Insta from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";
 const Footer = (props) => {
  return (
    <div
      className={
        props.stickyBottom ? "footer-main sticky-bottom" : "footer-main"
      }
    >
      <Row className="footer-row">
        <a
          href="https://pictieee.in"
          target="_blank"
          className="branch-text col-md-4"
          rel="noreferrer"
        >
          © PICT IEEE Student Branch
        </a>
        <div className="terms col-md-4">
          <NavLink to={"/team"} className="terms-text">
            Designed & Developed By :  <span  > Web Team </span>
          </NavLink>
        </div>
        <div className="social-wrapper col-md-4">
          <a
            href="https://www.instagram.com/pictieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Insta} alt="Instagram" className="social-icons me-3" />
          </a>
          <a
            href="https://www.linkedin.com/company/pisbieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="Instagram" className="social-icons me-3" />
          </a>
          <a
            href="https://www.facebook.com/pictieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Instagram" className="social-icons me-3" />
          </a>
        </div>
        
        <div className="footer-wrapper"></div>
      </Row>
    </div>
  );
};

export default Footer
