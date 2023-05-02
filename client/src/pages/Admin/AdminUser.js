import { useEffect, useState } from "react";
import Requests from "../../api/requests";
import { useNavigate } from "react-router-dom";
import phonepe from '../../images/phonepe.png'
import gpay from '../../images/gpay.jpg'
import paytm from '../../images/paytm.png'
import amazonpay from '../../images/amazonpay.png'
import { Container, Row, Col, Button } from "react-bootstrap";
const AdminUser = ({props}) => {
  // const details = [
  //   {

  //     heading: "CLASH",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "1",
  //     structure:
  //       "carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     rules:
  //       "carefully designed to assess your command over programming in the language of your choice-Python, C or ++.  Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. \nEvent Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     amount: 50,
  //     count: 1,
  //   },

  //   {

  //     heading: "REVERSE CODING",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "2",
  //     amount: 20,
  //     count: 1,
  //   },

  //   {

  //     heading: "REVERSE 3",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "3",
  //     amount: 30,
  //     count: 1,
  //   },

  //   {

  //     heading: "REVERSE 4",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "4",
  //     amount: 50,
  //     count: 1,
  //   },

  //   {

  //     heading: "REVERSE 5",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "5",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "REVERSE 6",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "6",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "REVERSE 6",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "7",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "REVERSE 6",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "8",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "REVERSE 6",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "9",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "CRETRONIX",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "10",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "PIXELATE",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "11",
  //     amount: 50,
  //     count: 1,
  //   },
  //   {

  //     heading: "WEB",
  //     body: "Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set oftime-bound coding challenges, carefully designed to assess your command over programming in the language of your choice-Python, C or ++. Showcase technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose. Event Link - http://clash.credenz.in Timings Round-1: 13-04-2022 to 14-04-2022 Round-2: 15-04-2022",
  //     id: "12",
  //     amount: 50,
  //     count: 1,
  //   },
  // ];
  const [details,setdetails] =useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [username,setUsername] = useState('');
  const [length,setLength] = useState(0);
  const [payMethod,setPayMethod] = useState(0);
  const [name,setName] = useState('');
  const [pass,setPass] = useState(false);
  const payList=[
    'UTR','UPI transaction ID','UPI Ref ID','Bank Reference Id'
]
  let navigate=useNavigate();
  let link = `upi://pay?pa=pictscholarship@jsb&pn=${name}&am=${amount}&tn=IEEE&cu=INR`;
  const handelChange = (e) => {
    let temp = [];
    temp=cart;
    if (!e.target.checked) temp = temp.filter((data) => data.id !== e.target.id)
    else temp.push({ id: e.target.id, amt: Number(e.target.value) })
    // console.log(Number(e.target.value),e.target.id,e.target.checked,temp)
    let amt = 0;
    temp.map(data => amt += data.amt);
    // console.log(e.ttemp,temp.length,amt);
    setAmount(amt);
    setCart(temp);
    setLength(temp.length);
    link = `upi://pay?pa=pictscholarship@jsb&pn=${name}&am=${amt}&tn=Credenz IEEE&cu=INR`;
    generate();
  }
    const [isQr, setisQr] = useState(false);
    const [upiId, setupiId] = useState("");
    function generate() {
        setisQr(true);
        var div = document.getElementById('payment-qr-code');
              
            while(div.firstChild) {
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
    const handleClick=()=>{
      // console.log(cart);
      let event_list=[];
      let amount=0;
      cart.map((data)=>{amount+=data.amt;event_list.push(data.id)})
      // console.log(amount,event_list);
      Requests.adminOrder({username,transaction_id:upiId,event_list,amount})
      .then((res)=>{
        console.log(res,props);
        props.toast.toast.success('Successfully generated ticket');
        navigate('/admin');
      })
      .catch((err)=>{console.log(err);props.toast.toast.success('Error While Generating ticket');})
      //   window.alert(`UPI Transaction Id :- ${upiId}`);
      //   window.alert(`username :- ${username}`);
    }
    const handelPass=()=>{
      link = `upi://pay?pa=pictscholarship@jsb&pn=${name}&am=${200}&tn=Credenz IEEE&cu=INR`;
    generate();
    }
    const eventList = async () => {
    await Requests.events()
      .then((res) => {
        console.log(res.data);
        setdetails(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    eventList();
  }, []);
  return (

    <div className="adminUser">
      {/* {console.log(details)} */}
      {/* <form onSubmit={(e)=>{e.preventDefault();console.log(e.target)}}> */}

      <div className="card">
        <div className="row">
          <div className="col-md-7 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Events</b>
                  </h4>
                </div>
                {/* <div className="col align-self-center text-right ">3 items</div> */}
              </div>
            </div>
            
            <table style={{'width':'100%'}}>
              <tbody style={{ 'fontSize': 'large' }}>
                <tr>
                  <th>Event Name</th>
                  <th style={{ 'paddingLeft': '5px' }}>Cost</th>
                </tr>
                {/* <tr key={100}>
                    <td><input type="checkbox" onChange={handelPass} id={100} name={'Event Pass'} value={200} />
                      <label for={100}>{'Event Pass'}</label></td>
                    <td style={{ 'paddingLeft': '15px' }}><label for={100}>{200}</label></td>
                  </tr> */}
                {details.map((data) => (
                  <>
                  {data.id!==103&&<tr key={data.id}>
                    <td><input type="checkbox" onChange={handelChange} id={data.id} name={data.heading} value={data.amount} />
                      <label for={data.id}>{data.heading}</label></td>
                    <td style={{ 'paddingLeft': '15px' }}><label for={data.id}>{data.amount}</label></td>


                  </tr>
                  }
                  </>

                ))}
                <tr><hr style={{ 'width': '120%', 'height': '2px', 'borderWidth': '5px', 'color': 'white', 'backgroundColor': 'white' }}></hr></tr>
                <tr><td>Items</td><td style={{ 'paddingLeft': '15px' }}>{length}</td></tr>
                <tr><td>Total Amount</td><td style={{ 'paddingLeft': '15px' }}>{amount}</td></tr>

              </tbody>
            </table>
          </div>

          <div className="col-md-5 summary">
            <div>
                                <h4>
                                    <b>Payment</b>
                                </h4>
                            </div>
                            <hr />
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
              {/* <div className="col">TOTAL PRICE</div>
              <div className="col text-right">{totalprice}</div> */}
            </div>
            <div>
            Enter Payee Name First:
            <input id="upiId"
              name="upiId"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Payee Name:"
              required
            >
            </input>
            </div>
            <div className='pay-links'>
            {/* {!isQr ? <button onClick={() => generate()}>Click For QR</button> : <></>} */}
              <div id='payment-qr-code' className="payment-qr-code" style={isQr ? { 'visibility': 'visible' } : { 'height': '0', 'width': '0' }}></div>
              <p className="payment-link">Select Method</p>
              {/* <a target="_blank" href={link} rel="noreferrer" className="payment-link">Click To Pay</a> */}
            </div>
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
            <div>
            Enter Username Of Person:
            <input id="upiId"
              name="upiId"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter Upi Transaction Id:"
              required
            >
            </input>
            </div>
            {/* Enter Upi Transaction Id:
            <input id="upiId"
              name="upiId"
              value={upiId}
              onChange={e => setupiId(e.target.value)}
              placeholder="Enter Upi Transaction Id:"
              required
            >
            </input> */}
            <button className="btn" onClick={() => handleClick()}>Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdminUser;