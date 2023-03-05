import React from 'react'
import './Cart.css'
import Clash from "../images/clash.png";

const Cart = () => {
    
  return (
    <>
    <div className="cartpage">
<div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                            {/* <div class="col align-self-center text-right ">3 items</div> */}
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={Clash} /></div>
                            <div class="col">
                                <div class="row ">Event name</div>
                                <div class="row">Clash</div>
                            </div>
                           
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={Clash} /></div>
                            <div class="col">
                                <div class="row ">Event name</div>
                                <div class="row">Clash</div>
                            </div>
                        
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                   
 <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={Clash} /></div>
                            <div class="col">
                                <div class="row ">Event name</div>
                                <div class="row">Clash</div>
                            </div>
                       
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    
                    <div class="back-to-shop"><a href="#">Back to events;</a></div>
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div class="row">
                        <div class="col" style={{paddingLeft:"0"}}>ITEMS 3</div>
                        <div class="col text-right">&euro; 132.00</div>
                    </div>
                  
                    <div class="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">&euro; 137.00</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Cart