import React from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useCartContext } from "../../context/cart_context";
import { useNavigate } from "react-router-dom";
const Cart = (props) => {
  const { cart, removeitem, clearcart, totalprice } = useCartContext();
  // console.log(cart)
  let navigate = useNavigate();
  let variable = encodeURI('upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=1&tn=ieee&cu=INR');
  console.log(variable);
  if (cart.length === 0) {
    return (
      <div className="cartpage">
        <div className="card">
          <div className="row">
            <div className="col-12 cart">
              <div className="title">
                <div className="row">
                  <div className="noevent">
                    <h4>No event added in cart</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="cartpage">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  {/* <div className="col align-self-center text-right ">3 items</div> */}
                </div>
              </div>

              <div className="eventsection">
                <Scrollbars>
                  {cart?.map((curr) => {
                    {
                      /* console.log(curr) */
                    }
                    return (
                      <div className="row border-top border-bottom" key={curr.id}>
                        <div className="row main align-items-center">
                          <div className="col-2">
                            <img className="img-fluid" src={curr.image} />
                          </div>
                          <div className="col">
                            <div className="row ">Event name</div>
                            <div className="row">{curr.heading}</div>
                          </div>
                         
                          <div className="col  close">
                            <div className="amount"> <i className="fa fa-inr"></i> {curr.amount}</div>
                            <div className="delete">
                              <i
                                className="fa-solid fa-trash"
                                onClick={() => removeitem(curr.id)}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Scrollbars>
              </div>
              <div className="back-to-shop">
                {/* <a href="/events">Back to events</a> */}
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/events') }}>Back to events</a>
                <button onClick={clearcart}>Clear cart</button>
              </div>
            </div>

            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
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
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right"> <i className="fa fa-inr"></i> {totalprice}</div>
              </div>
              {/* <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${variable}&amp;size=100x100`}
                                                className="qr-code img-thumbnail img-responsive" alt='QR CODE'/> */}
              <button className="btn" onClick={()=>{
                if(localStorage.getItem('token')) navigate('/payment');
                else{
                  props.toast.toast.error("Login First!")
                  navigate('/login');
                }
                }}>
                CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
