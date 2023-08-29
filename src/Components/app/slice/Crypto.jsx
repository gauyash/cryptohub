import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "4c337e48e0msh70079eae7440fcbp10fc4cjsn6d1f0b8012e3",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const fetchCrypto = createAsyncThunk("fetchCrypto", async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: cryptoApiHeaders,
  });
  const data = await response.json();
  return data;
});
const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(fetchCrypto.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

export { fetchCrypto };
export default cryptoSlice.reducer;
