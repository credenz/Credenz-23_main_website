import './phoneNavbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../../context/cart_context';
import { Button } from 'react-bootstrap';
const PhoneNavbar = () => {
    let navigate = useNavigate();
    const {loginStatus} = useCartContext();
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="navbar-wrapper">
      <svg
        className={`ham hamRotate ham1 ${navOpen ? "active" : ""}`}
        width={"36"}
        viewBox={"0 0 100 100"}
        onClick={() => setNavOpen((state) => !state)}
      >
        <path
          className="line top"
          d={
            "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          }
        ></path>
        <path className="line middle" d={"m 30,50 h 40"}></path>
        <path
          className="line bottom"
          d={
            "m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          }
        ></path>
      </svg>

      <div className="navbar-mobile">
        <div className={`wrapper ${navOpen ? "active" : ""}`}>
          {/* {props.toast.container} */}
          <ul className="fa-ul">
            <li>
              <Link
                to={"/"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-home"></i>
                </span>
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                to={"/schedule"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-calendar"></i>
                </span>
                Schedule
              </Link>
            </li> */}
            <li>
              <Link
                to={"/events"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/events'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-trophy"></i>
                </span>
                Events
              </Link>
            </li>
            {/* <li>
              <Link
                to={"/side-events"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-camera"></i>
                </span>
                Buildup Events
              </Link>
            </li> */}

            {/* <li>
              <Link
                to={"/sponsors"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-handshake"></i>
                </span>
                Sponsors
              </Link>
            </li> */}
            {/* <li>
              <Link
                to={"/profile"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-id-badge"></i>
                </span>
                Profile
              </Link>
            </li> */}
            <li>
              <Link
                to={"/about"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/about'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-info"></i>
                </span>
                About US
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/contact'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-phone"></i>
                </span>
                Contact Us
              </Link>
            </li>
            {loginStatus&&<li>
              <Link
                to={"/profile"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/profile'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                <i class="fas fa-id-badge" ></i>
                </span>
                Profile
              </Link>
            </li>}
            <li>
              <Link
                to={"/cart"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/cart'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                <i class="fa fa-shopping-cart" ></i>
                </span>
                cart
              </Link>
            </li>
            {!loginStatus&&<li>
              <Link
                to={"/login"}
                onClick={() => window.location.pathname==='/explore'
                  ?
                  window.location.href =window.location.origin+'/login'
                  :setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  {/* <i className="fas fa-info"></i> */}
                </span>
                <button className='plogin'>
                Login
                </button>
                {/* <Button>Login</Button> */}
              </Link>
            </li>}
          </ul>
          {/* {loginStateButtons()} */}
        </div>
      </div>
    </div>


    )
}
export default PhoneNavbar;