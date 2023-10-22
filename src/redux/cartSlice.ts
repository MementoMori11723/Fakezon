import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //state.productsNumber += 1;
      const addProductExists: any = state.products.find(
        (p: any) => p.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber += parseInt(action.payload.quantity);
      console.log(JSON.parse(JSON.stringify(state.products)));
    },
    removeFromCart: (state, action) => {
      const removeProduct = state.products.find(
        (p: any) => p.id === action.payload
      );
      const index = state.products.findIndex(
        (p: any) => p.id === action.payload
      );
      state.productsNumber -= removeProduct.quantity;
      state.products.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
