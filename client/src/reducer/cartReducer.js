const cartReducer = (state, action) => {
  if (action.type === "ADDTOCART") {
    let { id, image, heading, amount } = action.payload;

    // console.log(id);

    let cartProduct;

    cartProduct = {
      id,
      image,
      heading,
      amount,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVEITEM") {
    let updatecart = state.cart.filter(
      (curritem) => curritem.id !== action.payload
    );

    return {
      ...state,
      cart: updatecart,
    };
  }

  if (action.type === "CLEARCART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if(action.type === "TOTALITEM"){

  //     let updateitemval = state.cart.reduce((initialVal,curElem)=>{
  //         let {count} = curElem;

  //         initialVal = initialVal+count;

  //         return initialVal;
  //     },0);

  //     return{
  //         ...state,
  //         totalitem:updateitemval,
  //     }

  // }

  if (action.type === "TOTALPRICE") {
    let totalprice = (state.cart ?? []).reduce((initialVal, curElem) => {
      let { amount } = curElem;

      // let updatedTotalAmount = price * quantity;
      // accum.totalAmount += updatedTotalAmount;

      // accum.totalItem += quantity;

      initialVal = initialVal + amount;
      return initialVal;
    },0);
    return { ...state, totalprice };
  }

  return state;
};

export default cartReducer;
