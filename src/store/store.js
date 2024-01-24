import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/slices/cartSlice";
import restroSlice from "../redux/slices/restroSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restro: restroSlice,
  },
});
