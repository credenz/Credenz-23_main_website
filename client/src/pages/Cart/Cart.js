import React from "react";
import "./Cart.css";
// import Clash from "../../images/clash.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useCartContext } from "../../context/cart_context";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, removeitem, clearcart, totalprice } = useCartContext();
  // console.log(cart)
  let navigate = useNavigate();
  let variable = encodeURI('upi://pay?pa=vanshteppalwar@oksbi&pn=VanshTeppalwar&am=1&tn=ieee&cu=INR');
  console.log(variable);
  if (cart.length === 0) {
    return (
      <div className="cartpage">
        <div class="card">
          <div class="row">
            <div class="col-12 cart">
              <div class="title">
                <div class="row">
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
        <div class="card">
          <div class="row">
            <div class="col-md-8 cart">
              <div class="title">
                <div class="row">
                  <div class="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  {/* <div class="col align-self-center text-right ">3 items</div> */}
                </div>
              </div>

              <div className="eventsection">
                <Scrollbars>
                  {cart?.map((curr) => {
                    {
                      /* console.log(curr) */
                    }
                    return (
                      <div class="row border-top border-bottom" key={curr.id}>
                        <div class="row main align-items-center">
                          <div class="col-2">
                            <img class="img-fluid" src={curr.image} />
                          </div>
                          <div class="col">
                            <div class="row ">Event name</div>
                            <div class="row">{curr.heading}</div>
                          </div>
                         
                          <div class="col  close">
                            <div className="amount"> <i class="fa fa-inr"></i> {curr.amount}</div>
                            <div className="delete">
                              <i
                                class="fa-solid fa-trash"
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
              <div class="back-to-shop">
                <a href="/events">Back to events</a>

                <button onClick={clearcart}>Clear cart</button>
              </div>
            </div>

            <div class="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
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
                <div class="col text-right"> <i class="fa fa-inr"></i> {totalprice}</div>
              </div>
              {/* <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${variable}&amp;size=100x100`}
                                                class="qr-code img-thumbnail img-responsive" alt='QR CODE'/> */}
              <button class="btn" onClick={()=>navigate('/payment')}>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
