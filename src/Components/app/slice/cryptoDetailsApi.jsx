import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "4c337e48e0msh70079eae7440fcbp10fc4cjsn6d1f0b8012e3",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl="https://coinranking1.p.rapidapi.com/"

const fetchCryptoDetails = createAsyncThunk("fetchCryptoDetails", async (id) => {
  const response = await fetch(`${baseUrl}coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, {
    method: "GET",
    headers: cryptoApiHeaders,
  });
  const data = await response.json();
  return data;
});
const cryptoDetailsSlice = createSlice({
  name: "cryptoDetails",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCryptoDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCryptoDetails.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(fetchCryptoDetails.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});
export { fetchCryptoDetails };
export default cryptoDetailsSlice.reducer;
