export const getAllProduct = (state)=> state.productReducer.Product;





export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);