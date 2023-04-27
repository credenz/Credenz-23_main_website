import { useEffect, useState } from "react";
import Requests from "../../api/requests";
const AdminUser = () => {
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
  let link = `upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=${amount}&tn=IEEE&cu=INR`;
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
    link = `upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=${amt}&tn=IEEE&cu=INR`;
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
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: window.QRCode.CorrectLevel.H
        });
    }
    const handleClick=()=>{
        window.alert(`UPI Transaction Id :- ${upiId}`);
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
                {details.map((data) => (
                  <tr key={data.id}>
                    <td><input type="checkbox" onChange={handelChange} id={data.id} name={data.heading} value={data.amount} />
                      <label for={data.id}>{data.heading}</label></td>
                    <td style={{ 'paddingLeft': '15px' }}><label for={data.id}>{data.amount}</label></td>


                  </tr>



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
            <div className='pay-links'>
            {/* {!isQr ? <button onClick={() => generate()}>Click For QR</button> : <></>} */}
              <div id='payment-qr-code' className="payment-qr-code" style={isQr ? { 'visibility': 'visible' } : { 'height': '0', 'width': '0' }}></div>
              {/* <a target="_blank" href={link} rel="noreferrer" className="payment-link">Click To Pay</a> */}
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

  )
}

export default AdminUser;