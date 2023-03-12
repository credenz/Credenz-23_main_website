import { useEffect, useState } from 'react';
import './Payment.css';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../../context/cart_context";
const Payment = () => {
    // const [data,setData]=useState(props);
    const { totalprice } = useCartContext();
    const link = `upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=${totalprice}&tn=IEEE&cu=INR`;
    const [isQr, setisQr] = useState(false);
    const [upiId, setupiId] = useState("");
    let navigate = useNavigate();
    function generate() {
        setisQr(true);
        var qrcode = new window.QRCode(document.querySelector(".payment-qr-code"), {
            text: link,
            width: 150, //default 128
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: window.QRCode.CorrectLevel.H
        });
    }
    const handleClick=()=>{
        window.alert(`UPI Transaction Id :- ${upiId}`);
    }
    // useEffect(()=>generate(),[]);
    return (
        <>
            <div className="payment">
                <div class="card">
                    <div class="row">
                        <div class="col-md-8 cart">
                            <div class="title">
                                <div class="row">
                                    <div class="col">
                                        <h4>
                                            <b>Payment</b>
                                        </h4>
                                    </div>
                                    {/* <div class="col align-self-center text-right ">3 items</div> */}
                                </div>
                            </div>

                            <div className="pay-section">
                                <Scrollbars>
                                    <div>
                                        <h4> Follow This Steps For Payment </h4>
                                        <p class="pay-rules">
                                        1)Scan QR or click on the link to pay.<br></br>
                                        2)Ensure Amout entered matches the one shown in summary.<br></br>
                                        3)Verification of payment will be done and status will be updated in profile-orders section.<br></br>
                                        4)After Successfull payment, Enter Transaction ID and click confirm payment.<br></br>
                                        5)In case Of any queries contact below.</p>
                                    </div>

                                </Scrollbars>
                            </div>
                            <div class="back-to-shop">
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/cart') }}>Back to cart</a>
                                {/* <button onClick={()=>navigate('/cart')}>Back to cart</button> */}
                                {!isQr ? <button onClick={() => generate()}>Click For QR</button> : <></>}
                            </div>
                        </div>

                        <div class="col-md-4 summary">
                            {/* <div>
                                <h4>
                                    <b>Buy</b>
                                </h4>
                            </div>
                            <hr /> */}
                            {/* <div class="row">
                <div class="col" style={{ paddingLeft: "0" }}>
                  ITEMS 3
                </div>
                <div class="col text-right">&euro; 132.00</div>
              </div> */}

                            <div
                                class="row"
                                style={{
                                    borderTop: "1px solid rgba(0,0,0,.1)",
                                    padding: "2vh 0",
                                }}
                            >
                                <div class="col">TOTAL PRICE</div>
                                <div class="col text-right">{totalprice}</div>
                            </div>
                            <div class='pay-links'>
                            <div class="payment-qr-code" style={isQr?{'visibility': 'visible'}:{'height': '0','width':'0'}}></div>
                            <a target="_blank" href={link} rel="noreferrer" class="payment-link">Click To Pay</a>
                            </div>
                            
                            <input id="upiId"
                                    name="upiId"
                                    value={upiId}
                                    onChange={e => setupiId(e.target.value)}
                                    placeholder="Enter Upi Transaction Id:"
                                    required
                                    >
                            </input>
                            <button class="btn" onClick={() => handleClick()}>Confirm Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;