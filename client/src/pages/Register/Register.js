import React, { useState, useEffect } from "react";
import "./login.css";
import "./register.css";
import { useNavigate,useParams } from "react-router-dom";
import ReactModal from "react-modal";
import Requests from "../../api/requests";
const Register = (props) => {
  let navigate=useNavigate();
  const [register2, setregister2] = useState(0);

  const[senior,setsenior] = useState()

  //register
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [registeremail, setregisterEmail] = useState("");
  const [phone, setphone] = useState("");
  const [institute, setinstitute] = useState("");
  // const [year, setyear] = useState("");
  const [referal, setreferal] = useState("");
  const [registerpassword, setregisterpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  //next register
  const [ieee, setieee] = useState(false);
  const [ispictian, setIspictian] = useState(false);
  const [isjunior, setIsjunior] = useState(false);
  const [isSenior, setIsSenior] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const signupsubmit = async (e) => {
    e.preventDefault();
    if(!register2) {
      if(allfieldsfilled() && registerpassword === confirmpassword) setregister2(1);
      else if(emailError) props.toast.toast.error("Please fill out correct email");
      else if(phoneError) props.toast.toast.error("Please fill out correct phone number");
      return;
    }
    let data={
      username,
      password:registerpassword,
      first_name:firstname,
      phone,
      email:registeremail,
      last_name:lastname,
      // country_code:'+91',
      institute,
      senior,
    };
    // if(senior) data.senior='true';
    if(referal!=='') data.referralCode=referal;
    // console.log(data,typeof(data.phone));
    const id = props.toast.toast.loading("Please wait...");
    await Requests.register(data)
    .then((res)=>{
      // console.log(res);
      localStorage.setItem('token',res.data.access);
      props.toast.toast.update(id, { render: "Registration Sccessfull", type: "success", isLoading: false, autoClose:5000 });
      navigate('/events');
    })
    .catch((err)=>{
      // console.log(err,err.response.data.username);
      // console.log(err,err.response.data[0]);
      console.log(err);
      let msg='Error while registering';
      // if(err.response.data.username) msg=err.response.data.username;
      // if(err.response.data.password[0]) msg=err.response.data[0];
      // if(err.response.password[0]) msg=err.response.password[0];
      props.toast.toast.update(id, { render: msg, type: "error", isLoading: false,autoClose:5000 });

    })
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

  //   const handleregister = (e) => {

  //     setregister2(e);
  //   };

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

  const allfieldsfilled = () => {

    const emailValid = ValidateEmail(registeremail);
    const phoneValid = ValidatePhone(phone);
    return (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      emailValid &&
      phoneValid &&
      registerpassword !== "" &&
      confirmpassword !== ""
    );
  };
  let referral = useParams().referral;
  useEffect(()=>{
    if(localStorage.getItem('token')!==null) navigate('/events')
    if(referral)
    setreferal(referral);
    // console.log(referral);
  },[])
  return (
    <>
      <div className="form-body register"  data-aos="fade-in"  data-aos-duration="500">
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
                <h3>Create Account</h3>
                <p>Please sign-up to continue!</p>
                <div className="page-links">
                  {/* <a
                    href="/login"
                    //   className="registerbutton"
                    //   onClick={() =>
                    //     // setregister(0);
                    //     handleregister(0)
                    //   }
                  >
                    Login
                  </a>{" "} */}
                  <button
                    className="registerbutton"
                    id="noline"
                      onClick={() => {
                        // setregister(0);
                        navigate('/login');
                      }}
                  >
                    Login
                  </button>
                  <button
                    className="underline"
                    //   onClick={() => {
                    //     setregister(1);
                    //   }}
                  >
                    Register
                  </button>
                </div>
                {register2 == 0 && (
                  <form onSubmit={signupsubmit}>
                    <div className="registersection">
                      <div className="namesection">
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          onChange={(e) => setfirstname(e.target.value)}
                          value={firstname}
                          required
                        />

                        <input
                          className="form-control"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          required
                          onChange={(e) => setlastname(e.target.value)}
                          value={lastname}
                        />
                      </div>

                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        onChange={(e) => setusername(e.target.value)}
                        value={username}
                      />
                      <input
                        className="form-control"
                        type="email"
                        name="registeremail"
                        placeholder="E-mail Address"
                        required
                        onChange={(e) => setregisterEmail(e.target.value)}
                        value={registeremail}
                      />

                      <input
                        className="form-control"
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        required
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                      />
                       <input
                          className="form-control"
                          type="text"
                          name="institute"
                          placeholder="Institiute"
                          required
                          onChange={(e) => setinstitute(e.target.value)}
                          value={institute}
                        />

                      <div className="passwordsection">
                       
                        {/* <input
                          className="form-control"
                          type="text"
                          name="Year"
                          placeholder="Year"
                          required
                          onChange={(e) => setyear(e.target.value)}
                          value={year}
                        /> */}
                      </div>

                      <input
                        className="form-control"
                        type="text"
                        name="referalcode"
                        placeholder="Referal Code (If any)"
                        onChange={(e) => setreferal(e.target.value)}
                        value={referal}
                      />

                      {/* <div className="passwordsection"> */}
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password (Minimum 7 characters)"
                          required
                          onChange={(e) => setregisterpassword(e.target.value)}
                          value={registerpassword}
                        />
                        <input
                          className="form-control"
                          type="password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          required
                          onChange={(e) => setconfirmpassword(e.target.value)}
                          value={confirmpassword}
                        />
                      {/* </div> */}

                      <div className="form-button">
                        <button
                          onClick={
                            (e) => {
                            allfieldsfilled() ? 
                              registerpassword === confirmpassword ? setregister2(1) 
                                                                    : props.toast.toast.error("Passwords doesn't match!")
                                  
                                : props.toast.toast.error("Please fill out Complete details")}
                          }
                          className="ibtn"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {register2 == 1 && (
                  <form onSubmit={signupsubmit}   >
                    <div className="form-button goback  " >
                      <button
                        className="registerbutton back"
                        onClick={() => setregister2(0)}
                        // className=""
                      >
                        <p> {`< Go Back`}</p>
                      </button>
                    </div>

                    <div className="registersection" >
                      {/* <div className="collegesection">
                        <div className="div1">
                          <input
                            onClick={() => setieee(true)}
                            value={ieee}
                            type="checkbox"
                            id="javascript"
                          />

                          <label for="javascript">IEEE Member </label>
                        </div>

                        <div className="div2">
                          <input
                            onClick={() => setIspictian(true)}
                            value={ispictian}
                            type="checkbox"
                            id="javascript"
                          />
                          <label for="javascript">PICTIAN</label>
                        </div>
                      </div> */}

                      <div className="collegesection">
                       
                        <div className="div1">
                          <input
                            // onClick={() => setIsjunior(true)}
                            // value={isjunior}
                            checked={senior === false} 
                            onChange={() => setsenior(false)}
                            type="checkbox"
                            id="sep1"
                            name="sep1"
                          />

                          <label for="sep1">Junior (FE/SE)</label>
                        </div>
                        <div className="div2">
                          <input
                            // onClick={() => setISenior(true)}
                            onChange={() => setsenior(true)}
                            // value={isSenior}
                            checked={senior === true} 
                            type="checkbox"
                            name="sep2"
                            id="sep2"
                          />
                          <label for="sep2">SENIOR (TE/BE)</label>
                        </div>
                      </div>

                      <div className="form-button">
                        <button id="submit" type="submit" className="ibtn">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {/* <div className="other-links">
                            <span>Or register with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
