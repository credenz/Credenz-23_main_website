import { useEffect, useState } from 'react';
import './Payment.css';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../../context/cart_context";
import { Container, Row, Col, Button } from "react-bootstrap";
import phonepe from '../../images/phonepe.png'
import gpay from '../../images/gpay.jpg'
import paytm from '../../images/paytm.png'
import amazonpay from '../../images/amazonpay.png'
import Requests from '../../api/requests';
import { isDesktop } from 'react-device-detect';
import Modal from "react-modal";
const Payment = (props) => {
    // const [data,setData]=useState(props);
    const { cart, totalprice,clearcart,loginStatus } = useCartContext();
    // let name=localStorage.getItem('name')===null?"PISB":localStorage.getItem('name');
    const link = `upi://pay?pa=vanshteppalwar@oksbi&pn=pictscholarship&am=${totalprice}&tn=Credenz IEEE&cu=INR`;
    // const [isQr, setisQr] = useState(false);
    const [upiId, setupiId] = useState("");
    const [payMethod,setPayMethod] = useState(0);
    const payList=[
        'UTR','UPI transaction ID','UPI Ref ID','Bank Reference Id'
    ]
    let navigate = useNavigate();
    function generate() {
        // setisQr(true);
        // setisQr(true);
        var div = document.getElementById('payment-qr-code');

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        var qrcode = new window.QRCode(document.querySelector(".payment-qr-code"), {
            text: link,
            width: 150, //default 128
            height: 150,
            colorDark: "white",
            colorLight: "black",
            correctLevel: window.QRCode.CorrectLevel.H
        });
    }
    const handleClick = async () => {
        if(!loginStatus) {props.toast.toast.error('Login First!');return;}
        if(upiId==='') {props.toast.toast.error('Enter Valid id');return;}
        const event_list=[];
        cart.map((data)=>{
            event_list.push(data.id);
        })
        console.log(event_list,Number(totalprice));
        const id = props.toast.toast.loading("Please wait...");
        await Requests.order({event_list,transaction_id:Number(upiId),amount:totalprice})
        .then((res)=>{
            console.log('succesfull')
            props.toast.toast.update(id, { render: "Ticket Booked", type: "success", isLoading: false, autoClose:5000 });
            clearcart();
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
            props.toast.toast.update(id, { render: 'Payment Error', type: "error", isLoading: false,autoClose:5000 });

        })
        // console.log(cart,typeof(upiId));
        // window.alert(`UPI Transaction Id :- ${upiId}`);
    }
    const customStyles = {
        overlay: {
          zIndex: "1000",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "transparent",
          border: "none",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "black",
          border: "none",
          padding: "0px",
        },
      };
      const [modalIsOpen, setIsOpen] = useState(false);
    
      //   const openmodal =(id)=>{
      //     seteventid(id);
      // }
    
      function openModal() {
        // seteventid(id);
        // console.log("open model id:", id);
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "#f00";
      }
    
      function closeModal() {
        setIsOpen(false);
        // setDetails(0);
      }
    //   const handleProfile = async ()=>{
    //     await Requests.profile()
    //     .then((res)=>{
    //         // console.log(res.data.full_name)
    //         // name=res.data.full_name
    //         localStorage.setItem('name',res.data.full_name);
    //         generate()
    //     })
    //     .catch((err)=>{
    //     })
    //   }
    useEffect(() => {
        // handleProfile()
        generate()
    }, []);
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
                                        <p className="payment-rules">
                                            1)Scan QR or click on the link to pay.<br></br>
                                            2)Ensure Amout entered matches the one shown in summary.<br></br>
                                            3)Verification of payment will be done and status will be updated in profile-tickets section.<br></br>
                                            4)After Successfull payment, Enter Transaction ID and click confirm payment.<br></br>
                                            5)In case Of any queries contact 
                                            <a href='/contact' style={{fontFamily:'inherit'}} onClick={(e)=>{e.preventDefault();navigate('/contact')}}> here</a>.</p>
                                    </div>

                                </Scrollbars>
                            </div>
                            <div className="back-to-shop">
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/cart') }}>Back to cart</a>
                                {/* <button onClick={()=>navigate('/cart')}>Back to cart</button> */}
                                {/* {!isQr ? <button onClick={() => generate()}>Click For QR</button> : <></>} */}
                            {
                                !isDesktop&&
                            <div style={{display:'inline',paddingLeft:'20%',color: 'rgb(99 102 241)',textDecorationLine: 'underline'}}>
                                <a target="_blank" href={link} rel="noreferrer" >Click To Pay</a>
                                {/* <div className="payment-qr-code" id='payment-qr-code'></div> */}
                            </div>}
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
                            <div className='payment-links'>
                                <div className="payment-qr-code" id='payment-qr-code'></div>
                                {/* <a target="_blank" href={link} rel="noreferrer" className="payment-link">Click To Pay</a> */}
                                <p className="payment-link">Select Method</p>
                            </div>
                            {/* <img src={phonepe} /> */}
                            <Row>
                            <Col>
                                <img src={phonepe} alt="phonepe" className={payMethod==0?'pay-method pay-active':'pay-method '} onClick={(e)=>{setPayMethod(0)}}/>
                            </Col>
                            <Col>
                                <img src={gpay} alt="Image 2" className={payMethod===1?'pay-method pay-active':'pay-method '} onClick={(e)=>{setPayMethod(1)}}/>
                            </Col>
                            <Col>
                                <img src={paytm} alt="Image 3" className={payMethod===2?'pay-method pay-active':'pay-method '} onClick={(e)=>{setPayMethod(2)}}/>
                            </Col>
                            <Col>
                                <img src={amazonpay} alt="Image 4" className={payMethod===3?'pay-method pay-active':'pay-method '} onClick={(e)=>{setPayMethod(3)}}/>
                            </Col>
                            </Row>
                            <div style={{paddingTop:'5%'}}>
                            Enter {payList[payMethod]}
                            <input id="upiId"
                                name="upiId"
                                value={upiId}
                                onChange={e => setupiId(e.target.value)}
                                placeholder={`Enter ${payList[payMethod]}`}
                                required
                            >
                            </input>
                            </div>
                            <button className="btn" onClick={() => {props.toast.toast.info(`Please Ensure ${payList[payMethod]} is correct`);setIsOpen(true)}}>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        // contentLabel="Example Modal"
      >
              <div
                className="pay-modal"
                // data-aos="fade-in"
                // data-aos-duration="500"
              >
                <div className="modalclose">
                <div className="pmodalclose">
                  <div className="">
                    <button onClick={closeModal}>
                      <i class="fa fa-times cross" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                </div>
                <h4>Payment Confirmation</h4>
                {/* <div className="modalimage">
                  <img src={eventslist[data.id - 101].logo} alt="" />
                </div> */}

                {/* <div className="modalbody info"> */}
                <div className="pmodalbody info">
                <p>Total Price: {totalprice} </p>
                <p>{payList[payMethod]}: {upiId}</p>
                <ol className='pay-list'>
                    <li style={{color:'#625e5e'}}>Payment verification will be done in 2-3 working days.</li>
                    <li style={{color:'#625e5e'}}>Check profile section for final ticket status.</li>
                </ol>
                <div className="pay-button">
                <Button onClick={() => handleClick()}>Confirm</Button>
                  
                </div>
                </div>
                {/* </div> */}
              </div>
            
      </Modal>
        </>
    )
}
export default Payment;