import { useEffect, useState } from 'react';
import './Payment.css';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../../context/cart_context";
const Payment = () => { 
    // const [data,setData]=useState(props);
    const { cart,totalprice } = useCartContext();
    const link = `upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=${totalprice}&tn=IEEE&cu=INR`;
    // const [isQr, setisQr] = useState(false);
    const [upiId, setupiId] = useState("");
    let navigate = useNavigate();
    function generate() {
        // setisQr(true);
        // setisQr(true);
        var div = document.getElementById('payment-qr-code');
              
            while(div.firstChild) {
                div.removeChild(div.firstChild);
            }
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
        console.log(cart);
        window.alert(`UPI Transaction Id :- ${upiId}`);
    }
    useEffect(()=>generate(),[]);
    return (
        <>
            <div className="payment">
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col">
                                        <h4>
                                            <b>Payment</b>
                                        </h4>
                                    </div>
                                    {/* <div className="col align-self-center text-right ">3 items</div> */}
                                </div>
                            </div>

                            <div className="pay-section">
                                <Scrollbars>
                                    <div>
                                        <h4> Follow This Steps For Payment </h4>
                                        <p className="pay-rules">
                                        1)Scan QR or click on the link to pay.<br></br>
                                        2)Ensure Amout entered matches the one shown in summary.<br></br>
                                        3)Verification of payment will be done and status will be updated in profile-orders section.<br></br>
                                        4)After Successfull payment, Enter Transaction ID and click confirm payment.<br></br>
                                        5)In case Of any queries contact below.</p>
                                    </div>

                                </Scrollbars>
                            </div>
                            <div className="back-to-shop">
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/cart') }}>Back to cart</a>
                                {/* <button onClick={()=>navigate('/cart')}>Back to cart</button> */}
                                {/* {!isQr ? <button onClick={() => generate()}>Click For QR</button> : <></>} */}
                            </div>
                        </div>

                        <div className="col-md-4 summary">
                            {/* <div>
                                <h4>
                                    <b>Buy</b>
                                </h4>
                            </div>
                            <hr /> */}
                            {/* <div className="row">
                <div className="col" style={{ paddingLeft: "0" }}>
                  ITEMS 3
                </div>
                <div className="col text-right">&euro; 132.00</div>
              </div> */}

                            <div
                                className="row"
                                style={{
                                    borderTop: "1px solid rgba(0,0,0,.1)",
                                    padding: "2vh 0",
                                }}
                            >
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right"> <i className="fa fa-inr"></i> {totalprice}</div>
                            </div>
                            <div className='pay-links'>
                            <div className="payment-qr-code" id='payment-qr-code'></div>
                            <a target="_blank" href={link} rel="noreferrer" className="payment-link">Click To Pay</a>
                            </div>
                            Enter Upi Transaction Id:
                            <input id="upiId"
                                    name="upiId"
                                    value={upiId}
                                    onChange={e => setupiId(e.target.value)}
                                    placeholder="Enter Upi Transaction Id:"
                                    required
                                    >
                            </input>
                            <button className="btn" onClick={() => handleClick()}>Confirm Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;