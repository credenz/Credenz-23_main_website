import React, { useState, useEffect } from "react";
import "./login.css";
import "./register.css";
import PhoneInput from "react-phone-number-input";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Requests from "../../api/requests";
import { useCartContext } from "../../context/cart_context";
const LoginNew = (props) => {
  let navigate=useNavigate();
  const [register, setregister] = useState(0);

  const [register2, setregister2] = useState(0);

  //   login
  const [loginUsername, setloginUsername] = useState("");
  const [loginpassword, setloginPassword] = useState("");

  //forget
  const [forgetemail, setforgetemail] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const {changeLogin,loginStatus} = useCartContext();

  const loginSubmit = async(e) => {
    e.preventDefault();
    // console.log({
    //   loginUsername,
    //   loginUsername,
    //   loginpassword,
    // });
    // console.log(props);
    const id = props.toast.toast.loading("Please wait...");
    await Requests.login({username:loginUsername,password:loginpassword})
    .then((res)=>{
      // console.log(res.data.access);
      localStorage.setItem('token',res.data.access);
      props.toast.toast.update(id, { render: "Logged IN", type: "success", isLoading: false, autoClose:5000 });
      changeLogin()
      navigate('/events');
    })
    .catch((err)=>{
      // console.log(err);
      props.toast.toast.update(id, { render: "Wrong username or password", type: "error", isLoading: false,autoClose:5000 });
    })
  };

  const forgetSubmit = async (e) => {
    e.preventDefault();
    // console.log(forgetemail,typeof(forgetemail));
    await Requests.forgetPassword({email:forgetemail})
    .then((res)=>{props.toast.toast.success('Link sent to mail!')})
    .catch((err)=>{console.log(err);props.toast.toast.error('Error while sending!')})
  };

  //   const handleregister = (e) => {
  //     setregister(e);
  //     setregister2(e);
  //   };

  // const allfieldsfilled = () => {

  //   const emailValid = ValidateEmail(registeremail);
  //   const phoneValid = ValidatePhone(phone);
  //   return (
  //     firstname !== "" &&
  //     lastname !== "" &&
  //     username !== "" &&
  //     emailValid &&
  //     phoneValid &&
  //     registerpassword !== "" &&
  //     confirmpassword !== ""
  //   );
  // };
  useEffect(()=>{
    if(loginStatus) navigate('/events')
  })
  return (
    <>
      {/* login */}
      {register == 0 && (
        <div className="form-body login"  data-aos="fade-in"  data-aos-duration="500">
          <div className="row">
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items">
                  {/* <div className="website-logo-inside">
                            <a href="index-2.html">
                                <div className="logo">
                                    <img className="logo-size" src="images/logo-light.svg" alt=""/>
                                </div>
                            </a>
                        </div> */}
                  <h3>Welcome Back</h3>
                  <p>Please sign-in to continue !</p>
                  <div className="page-links">
                    <button
                      className="underline"
                      onClick={() => {
                        setregister(0);
                      }}
                    >
                      Login
                    </button>
                    <button
                      // className="underline"
                      id="noline"
                      className="registerbutton"
                      onClick={() => {
                        setregister(1);
                        navigate('/register')
                      }}
                    >
                      Register
                    </button>
                    {/* <a id="noline"
                      href="/register"
                      // className="registerbutton"
                      // onClick={() => {
                      //   setregister(1);

                      // }}
                    >
                      Register
                    </a> */}
                  </div>
                  <form onSubmit={loginSubmit}>
                    <input
                      className="form-control"
                      type="text"
                      name="loginemail"
                      placeholder="Username"
                      onChange={(e) => setloginUsername(e.target.value)}
                      value={loginUsername}
                      required
                    />
                    <input
                      className="form-control"
                      type="password"
                      name="loginpassword"
                      placeholder="Password"
                      onChange={(e) => setloginPassword(e.target.value)}
                      value={loginpassword}
                      required
                    />
                    <div className="form-button">
                      <button id="submit" type="submit" className="ibtn">
                        Login
                      </button>{" "}
                      <button
                        className="registerbutton"
                        onClick={() => setregister(1)}
                      >
                        Forget password?
                      </button>
                    </div>
                  </form>
                  {/* <div className="other-links">
                            <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* register */}

      {/* forget password */}
      {register == 1 && (
        <div className="form-body forget" >
          <div className="row">
            <div className="form-holder">
              <div className="form-content" data-aos="fade-in"  data-aos-duration="400">
                <div className="form-items">
                  {/* <div className="website-logo-inside">
                            <a href="index-2.html">
                                <div className="logo">
                                    <img className="logo-size" src="images/logo-light.svg" alt=""/>
                                </div>
                            </a>
                        </div> */}
                  <h3>Password Reset</h3>
                  <p>
                    Please Enter your Email To Continue
                    <br />A verification code will be sent on your Email
                  </p>

                  <form onSubmit={(e)=>{forgetSubmit(e)}} className="forgetfields">
                    <input
                      className="form-control"
                      type="email"
                      name="forgetemail"
                      placeholder="E-mail Address"
                      required
                      onChange={(e) => setforgetemail(e.target.value)}
                      value={forgetemail}
                    />

                

                    <div className="forgetpart">
                      <div className="form-button ">
                        <button
                        //   onClick={() => setregister(0)}
                          id="submit"
                          type="submit"
                          className="ibtn btn-forget"
                        >
                          Send Reset Link
                        </button>
                      </div>
                    </div>

                    <div className="form-button full-width  ">
                      <button
                        className="registerbutton"
                        onClick={() => setregister(0)}
                        id="submit"
                        type="submit"
                      >
                        {`< Back to login`}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginNew;
