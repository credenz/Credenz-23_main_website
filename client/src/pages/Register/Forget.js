import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './login.css';
import swal from "sweetalert";
import Requests from '../../api/requests';
const Forget=()=>{
    const {token, uid} = useParams();
    //   function validate_required(field,alerttxt)
  // {

  //     if (password.value != cpassword.value) {
  //         alert("Your password and confirmation password do not match.");
  //         cpassword.focus();
  //         return false;
  //      }

  // }
    const forgetSubmit = async(e) => {
        e.preventDefault();
        if(cnewpass!==newpass)
            swal(
                "Error",
                "Passwords don't match!",
                "error"
            )
            console.log(uid,token,newpass)
        await Requests.resetPassowrd({uid,token,new_password:newpass})
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
      };
  const [newpass, setNewpass] = useState("");
  const [cnewpass, setCnewpass] = useState("");

    return (
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
                    Please Enter your New Password
                    {/* <br />A verification code will be sent on your Email */}
                  </p>

                  <form onClick={forgetSubmit} className="forgetfields">
                    <input
                      className="form-control"
                      type="password"
                      name="forgetemail"
                      placeholder="New Password"
                      required
                      onChange={(e) => setNewpass(e.target.value)}
                      value={newpass}
                    />

                    {/* <input
                      className="form-control"
                      type="text"
                      name="token"
                      placeholder="Verification token"
                      required
                      onChange={(e) => settoken(e.target.value)}
                      value={token}
                    /> */}

                    <input
                      className="form-control"
                      type="password"
                      name="newpassword"
                      placeholder="Confirm password"
                      required
                      onChange={(e) => setCnewpass(e.target.value)}
                      value={cnewpass}
                    />

                    <div className="forgetpart">
                      {/* <div className="form-button ">
                        <button
                          // onClick={() => setregister(0)}
                          id="submit"
                          type="submit"
                          className="ibtn btn-forget"
                        >
                          Send Reset Link
                        </button>
                      </div> */}

                      <div className="form-button ">
                        <button
                        //   onClick={() => setregister(0)}
                          id="submit"
                          type="submit"
                          className="ibtn btn-forget"
                        >
                          Submit
                        </button>
                      </div>
                    </div>

                    {/* <div className="form-button full-width  ">
                      <button
                        className="registerbutton"
                        onClick={() => setregister(0)}
                        id="submit"
                        type="submit"
                      >
                        {`< Back to login`}
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Forget;