import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "./login.css";
import "./register.css";
import PhoneInput from "react-phone-number-input";
import { Link, NavLink } from "react-router-dom";
const LoginNew = () => {
  const [register, setregister] = useState(0);

  const [register2, setregister2] = useState(0);

  //   login
  const [loginemail, setloginEmail] = useState("");
  const [loginpassword, setloginPassword] = useState("");

  //forget
  const [forgetemail, setforgetemail] = useState("");
  const [token, settoken] = useState("");
  const [newpass, setnewpass] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  //   function validate_required(field,alerttxt)
  // {

  //     if (password.value != cpassword.value) {
  //         alert("Your password and confirmation password do not match.");
  //         cpassword.focus();
  //         return false;
  //      }

  // }

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log({
      loginemail,
      loginpassword,
    });
  };

  const forgetSubmit = (e) => {
    e.preventDefault();
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

  return (
    <>
      {/* login */}
      {register == 0 && (
        <div class="form-body login">
          <div class="row">
            <div class="form-holder">
              <div class="form-content">
                <div class="form-items">
                  {/* <div class="website-logo-inside">
                            <a href="index-2.html">
                                <div class="logo">
                                    <img class="logo-size" src="images/logo-light.svg" alt=""/>
                                </div>
                            </a>
                        </div> */}
                  <h3>Welcome Back</h3>
                  <p>Please sign-in to continue !</p>
                  <div class="page-links">
                    <button
                      className="underline"
                      onClick={() => {
                        setregister(0);
                      }}
                    >
                      Login
                    </button>

                    <a id="noline"
                      href="/register"
                      // className="registerbutton"
                      // onClick={() => {
                      //   setregister(1);

                      // }}
                    >
                      Register
                    </a>
                  </div>
                  <form onSubmit={loginSubmit}>
                    <input
                      class="form-control"
                      type="email"
                      name="loginemail"
                      placeholder="E-mail Address"
                      onChange={(e) => setloginEmail(e.target.value)}
                      value={loginemail}
                      required
                    />
                    <input
                      class="form-control"
                      type="password"
                      name="loginpassword"
                      placeholder="Password"
                      onChange={(e) => setloginPassword(e.target.value)}
                      value={loginpassword}
                      required
                    />
                    <div class="form-button">
                      <button id="submit" type="submit" class="ibtn">
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
                  {/* <div class="other-links">
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
        <div class="form-body forget">
          <div class="row">
            <div class="form-holder">
              <div class="form-content">
                <div class="form-items">
                  {/* <div class="website-logo-inside">
                            <a href="index-2.html">
                                <div class="logo">
                                    <img class="logo-size" src="images/logo-light.svg" alt=""/>
                                </div>
                            </a>
                        </div> */}
                  <h3>Password Reset</h3>
                  <p>
                    Please Enter your Email To Continue
                    <br />A verification code will be sent on your Email
                  </p>

                  <form onClick={forgetSubmit} className="forgetfields">
                    <input
                      class="form-control"
                      type="email"
                      name="forgetemail"
                      placeholder="E-mail Address"
                      required
                      onChange={(e) => setforgetemail(e.target.value)}
                      value={forgetemail}
                    />

                    <input
                      class="form-control"
                      type="text"
                      name="token"
                      placeholder="Verification token"
                      required
                      onChange={(e) => settoken(e.target.value)}
                      value={token}
                    />

                    <input
                      class="form-control"
                      type="password"
                      name="newpassword"
                      placeholder="New password"
                      required
                      onChange={(e) => setnewpass(e.target.value)}
                      value={newpass}
                    />

                    <div className="forgetpart">
                      <div class="form-button ">
                        <button
                          // onClick={() => setregister(0)}
                          id="submit"
                          type="submit"
                          class="ibtn btn-forget"
                        >
                          Send Reset Link
                        </button>
                      </div>

                      <div class="form-button ">
                        <button
                        //   onClick={() => setregister(0)}
                          id="submit"
                          type="submit"
                          class="ibtn btn-forget"
                        >
                          Submit
                        </button>
                      </div>
                    </div>

                    <div class="form-button full-width  ">
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