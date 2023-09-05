import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer  from "./slice/Crypto";
import cryptoDetailsReducer  from "./slice/cryptoDetailsApi";
import newsApiReducer from './slice/NewsApi'

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    cryptoDetails:cryptoDetailsReducer,
    newsApi:newsApiReducer,
  },
});
