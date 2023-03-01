import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
        console.log("Inside addToCart method");
      state.cart.push({...action.payload});
    }
  },
});

export const { addToCart } = ProductSlice.actions;
export default ProductSlice.reducer;
