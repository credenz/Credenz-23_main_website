import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalcartdata=()=>{
  let localcartdata = localStorage.getItem("credenzcart");
  console.log(localcartdata);
  if(localcartdata===null){
    return [];
  }
  else if(localcartdata === []){
    return [];
  }else{
    return JSON.parse(localcartdata);
  }
}
const getLoginStatus=()=>{
  // console.log(localStorage.getItem('token')!==null);
  return localStorage.getItem('token')!==null;
}

const initialState = {
  // cart: [],
  cart:getLocalcartdata(),
  image:"",
  heading: "",
  amount:0,
  totalitem:"",
  totalprice:"",
  loginStatus:getLoginStatus(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addtocart = (id, image, heading, amount) => {
    dispatch({ type: "ADDTOCART", payload: { id, image, heading, amount } });
  };

  const removeitem = (id) => {
    dispatch({ type: "REMOVEITEM", payload:id});
  };

  const clearcart = (id) => {
    dispatch({ type: "CLEARCART"});
  };

  const changeLogin=(loginStatus)=>{
    dispatch({ type: "CHANGELOGIN",payload:{loginStatus}});
  }
  const changeLogout=(loginStatus)=>{
    dispatch({ type: "CHANGELOGOUT",payload:{loginStatus}});
  }

 
  useEffect(()=>{
    // dispatch({type:"TOTALITEM"});
    // console.log(state);
     dispatch({type:"TOTALPRICE"});
    localStorage.setItem("credenzcart",JSON.stringify(state.cart))
  },[state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addtocart,removeitem,clearcart,changeLogin,changeLogout }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext=()=>{
    return useContext(CartContext);
}

export { CartProvider ,useCartContext};
