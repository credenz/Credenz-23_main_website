import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "./login.css";
import "./register.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import Requests from "../../api/requests";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [register, setregister] = useState(0);

  const [register2, setregister2] = useState(0);

  //   login
  // login will be through username not email
  const [loginUsername, setloginUsername] = useState("");
  const [loginpassword, setloginPassword] = useState("");

  //register
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [registeremail, setregisterEmail] = useState("");
  const [phone, setphone] = useState("");
  const [institute, setinstitute] = useState("");
  const [year, setyear] = useState("");
  const [referal, setreferal] = useState("");
  const [registerpassword, setregisterpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  //next register
  const [ieee, setieee] = useState(false);
  const [ispictian, setIspictian] = useState(false);
  const [isjunior, setIsjunior] = useState(false);
  const [isSenior, setIsSenior] = useState(false);

  //forget
  const [forgetemail, setforgetemail] = useState("");
  const [token, settoken] = useState("");
  const [newpass, setnewpass] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  let navigate=useNavigate();

  //   function validate_required(field,alerttxt)
  // {

  //     if (password.value != cpassword.value) {
  //         alert("Your password and confirmation password do not match.");
  //         cpassword.focus();
  //         return false;
  //      }

  // }

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log({
      loginUsername,
      loginpassword,
    });
    await Requests.login({username:loginUsername,password:loginpassword})
    .then((res)=>{
      console.log(res.data.access);
      localStorage.setItem('token',res.data.access      );
      window.alert('LOGIN SUcCess');
    })
    .catch((err)=>{
      console.log(err);
      window.alert('Wrong username or password');
    })
  };

  const signupsubmit = async (e) => {
    e.preventDefault();
    let data={
      username,first_name:(firstname+' '+lastname),
      email:registeremail,password:registerpassword,
      phone,country_code:'+91',
      institute,senior:isSenior
    };
    if(referal!=='') data.referralCode=referal;
    console.log(data);
    // await Requests.register(data)
    // .then((res)=>{console.log(res)})
    // .catch((err)=>console.log(err))
    // console.log({
    //     fullname: firstname + lastname,
    //     username: username,
    //     password: passwd1,
    //     email: email,
    //     profile: {
    //       phone_no: phone,
    //     //   country_code: ccode,
    //     //   ieee_member: isIeeeMember,
    //     //   ieee_member_id: ieeeId || 0,
    //     //   institute: isPictian ? "PICT" : college,
    //     //   senior: isSenior,
    //     },
    // })
  };

  const forgetSubmit = (e) => {
    e.preventDefault();
  };

  const handleregister = (e) => {
    setregister(e);
    setregister2(e);
  };

  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(mail)) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  }

  const ValidatePhone = (phone) => {
    if (phone.length === 10) {
      setPhoneError(false);
      return true;
    } else {
      setPhoneError(true);
      return false;
    }
  };

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
                    <button
                      className="registerbutton"
                      onClick={() => {
                        setregister(1);
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <form onSubmit={loginSubmit}>
                    <input
                      class="form-control"
                      type="text"
                      name="loginUsername"
                      placeholder="UserName"
                      onChange={(e) => setloginUsername(e.target.value)}
                      value={loginUsername}
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
                        onClick={() => setregister(2)}
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
      {register == 1 && (
        <div class="form-body register">
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
                  <h3>Create Account</h3>
                  <p>Please sign-up to continue!</p>
                  <div class="page-links">
                    <button
                      className="registerbutton"
                      onClick={() =>
                        // setregister(0);
                        handleregister(0)
                      }
                    >
                      Login
                    </button>{" "}
                    <button
                      className="underline"
                      onClick={() => {
                        setregister(1);
                      }}
                    >
                      Register
                    </button>
                  </div>
                  {register2 == 0 && (
                    <form onSubmit={signupsubmit}>
                      <div className="registersection">
                        <div className="namesection">
                          <input
                            class="form-control"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            onChange={(e) => setfirstname(e.target.value)}
                            value={firstname}
                            required
                          />

                          <input
                            class="form-control"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                            onChange={(e) => setlastname(e.target.value)}
                            value={lastname}
                          />
                        </div>

                        <input
                          class="form-control"
                          type="text"
                          name="username"
                          placeholder="Username"
                          required
                          onChange={(e) => setusername(e.target.value)}
                          value={username}
                        />
                        <input
                          class="form-control"
                          type="email"
                          name="registeremail"
                          placeholder="E-mail Address"
                          required
                          onChange={(e) => setregisterEmail(e.target.value)}
                          value={registeremail}
                        />

                        <input
                          class="form-control"
                          type="phone"
                          name="phone"
                          placeholder="Phone"
                          required
                          onChange={(e) => setphone(e.target.value)}
                          value={phone}
                        />

                        <div className="passwordsection">
                          <input
                            class="form-control"
                            type="text"
                            name="institute"
                            placeholder="Institiute"
                            required
                            onChange={(e) => setinstitute(e.target.value)}
                            value={institute}
                          />
                          <input
                            class="form-control"
                            type="text"
                            name="Year"
                            placeholder="Year"
                            required
                            onChange={(e) => setyear(e.target.value)}
                            value={year}
                          />
                        </div>

                        <input
                          class="form-control"
                          type="text"
                          name="referalcode"
                          placeholder="Referal Code (If any)"
                          onChange={(e) => setreferal(e.target.value)}
                          value={referal}
                        />

                        <div className="passwordsection">
                          <input
                            class="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={(e) =>
                              setregisterpassword(e.target.value)
                            }
                            value={registerpassword}
                          />
                          <input
                            class="form-control"
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            value={confirmpassword}
                          />
                        </div>

                        <div class="form-button">
                          <button
                            onClick={
                              (e) => setregister2(1)
                              // allfieldsfilled()
                              //   ? registerpassword === confirmpassword
                              //   ?  setregister2(1)
                              //   : swal(
                              //       "Error",
                              //       "Passwords don't match!",
                              //       "error"
                              //     )
                              //     : swal("Error", "Please fill out all the details", "error")
                            }
                            class="ibtn"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {register2 == 1 && (
                    <form onSubmit={signupsubmit}>
                      <div className="form-button goback  ">
                        <button
                          className="registerbutton back"
                          onClick={() => setregister2(0)}
                          class=""
                        >
                          <p> {`< Go Back`}</p>
                        </button>
                      </div>

                      <div className="registersection">
                        {/* <div className="collegesection">
                          <div className="div1">
                            <input 
                            onClick={()=>setieee(true)}
                            value={ieee}
                            type="checkbox" id="javascript" />

                            <label for="javascript">IEEE Member </label>
                          </div>

                          <div className="div2">
                            <input
                            onClick={()=>setIspictian(true)}
                            value={ispictian}
                             type="checkbox" id="javascript" />
                            <label for="javascript">PICTIAN</label>
                          </div>
                        </div> */}
                      
                        <div className="collegesection">
                        <br />
                        <p>Choose any one from below</p>
                          <div className="div1">
                            <input
                            onClick={()=>setIsjunior(true)}
                            value={isjunior}
                              type="checkbox"
                              id="javascript"
                              name="sep1"
                            />
                   
                            <label for="sep1">Junior (FE/SE)</label>
                          </div>
                          <div className="div2">
                            <input
                            onClick={()=>setIsSenior(true)}
                            value={isSenior}
                              type="checkbox"
                              name="sep2"
                              id="javascript"
                            />
                            <label for="sep2">SENIOR (TE/BE)</label>
                          </div>
                        </div>

                        <div class="form-button">
                          <button id="submit" type="submit" class="ibtn">
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* <div class="other-links">
                            <span>Or register with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* forget password */}
      {register == 2 && (
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
                          onClick={() => setregister(0)}
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
export default Registration;
