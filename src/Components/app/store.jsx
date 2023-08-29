import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer  from "./slice/Crypto";
export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
