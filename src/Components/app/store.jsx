import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer  from "./slice/Crypto";
import newsApiReducer from './slice/NewsApi'

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    newsApi:newsApiReducer
  },
});
