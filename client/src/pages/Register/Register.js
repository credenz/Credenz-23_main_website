import React, { useState, useEffect } from "react";
import "./login.css";
import "./register.css";
import { useNavigate,useParams } from "react-router-dom";
import ReactModal from "react-modal";
import Requests from "../../api/requests";
const Register = () => {
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
  const [year, setyear] = useState("");
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

  const signupsubmit = (e) => {
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
  let referral = useParams().referral;
  useEffect(()=>{
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
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        required
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                      />

                      <div className="passwordsection">
                        <input
                          className="form-control"
                          type="text"
                          name="institute"
                          placeholder="Institiute"
                          required
                          onChange={(e) => setinstitute(e.target.value)}
                          value={institute}
                        />
                        <input
                          className="form-control"
                          type="text"
                          name="Year"
                          placeholder="Year"
                          required
                          onChange={(e) => setyear(e.target.value)}
                          value={year}
                        />
                      </div>

                      <input
                        className="form-control"
                        type="text"
                        name="referalcode"
                        placeholder="Referal Code (If any)"
                        onChange={(e) => setreferal(e.target.value)}
                        value={referal}
                      />

                      <div className="passwordsection">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
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
                      </div>

                      <div className="form-button">
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
                      <div className="collegesection">
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
                      </div>

                      <div className="collegesection">
                       
                        <div className="div1">
                          <input
                            // onClick={() => setIsjunior(true)}
                            // value={isjunior}
                            checked={senior === false} 
                            onChange={() => setsenior(false)}
                            type="checkbox"
                            id="javascript"
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
                            id="javascript"
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
