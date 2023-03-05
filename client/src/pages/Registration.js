import React, { useState, useEffect } from "react";
import "./login.css"
import "./register.css"
import { Link } from "react-router-dom";
const Registration = () =>{
   
    const [register,setregister]=useState(0);

useEffect(() => {
  console.log(register)

}, [register])


function handleregister (){
    console.log("in Handel Register")
    // setlogin(false);
    setregister(true);
}

    return (
<>
{/* login */}
{register==0 && (
    <div class="form-body">

  
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
                            onClick={()=> {
                                setregister(0)
                            }}
                            >
                            Login
                             </button> <button onClick={()=> {
                                setregister(1)
                            }} >Register</button>
                        </div>
                        <form>
                            <input class="form-control" type="text" name="username" placeholder="E-mail Address" required/>
                            <input class="form-control" type="password" name="password" placeholder="Password" required/>
                            <div class="form-button">
                                <button id="submit" type="submit" class="ibtn">Login</button> <button onClick={()=>setregister(2)} >Forget password?</button>
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
{register==1 && (
    <div class="form-body">
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
                        <h3>CreateAccount</h3>
                        <p>Please sign-up to continue!</p>
                        <div class="page-links">
                          
                        <button 
                            onClick={()=> {
                                setregister(0)
                            }}
                            >
                            Login
                             </button> <button onClick={()=> {
                                setregister(1)
                            }} >Register</button>
                            </div>
                        <form>
                            <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                            <input class="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                            <input class="form-control" type="password" name="password" placeholder="Password" required/>
                            <input class="form-control" type="password" name="password" placeholder="Password" required/>
                            <input class="form-control" type="password" name="password" placeholder="Password" required/>
                            <div class="form-button">
                                <button id="submit" type="submit" class="ibtn">Register</button>
                            </div>
                        </form>
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
{register==2 && (
    <div class="form-body">
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
                        <p>To reset your password, enter the email address you use to sign in to iofrm</p>
                        <form>
                            <input class="form-control" type="text" name="username" placeholder="E-mail Address" required/>
                            <div class="form-button full-width">
                                <button  onClick={()=> setregister(0)} id="submit" type="submit" class="ibtn btn-forget">Send Reset Link</button>
                                
                            </div>
                            <div class="form-button full-width">
                                <button  onClick={()=> setregister(0)} id="submit" type="submit" class="ibtn btn-forget">Back to Login</button>
                                
                            </div>
                        </form>
                    </div>
                    <div class="form-sent">
                        <div class="website-logo-inside">
                            <a href="index-2.html">
                                <div class="logo">
                                    <img class="logo-size" src="images/logo-light.svg" alt=""/>
                                </div>
                            </a>
                        </div>
                        <div class="tick-holder">
                            <div class="tick-icon"></div>
                        </div>
                        <h3>Password link sent</h3>
                        <p>Please check your inbox <a href="http://brandio.io/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5930363f2b341930363f2b342d3c342935382d3c773036">[email&#160;protected]</a></p>
                        <div class="info-holder">
                            <span>Unsure if that email address was correct?</span> <a href="#">We can help</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

   
</>
    )
}
export default Registration;