import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '4c337e48e0msh70079eae7440fcbp10fc4cjsn6d1f0b8012e3',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

const fetchNewsApi = createAsyncThunk("fetchNewsApi", async (searchTerm) => {
  const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off`;

  const response = await fetch(url, options);

  const data = await response.json();
  return data;
});

const newsApiSlice = createSlice({
  name: "newsApi",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewsApi.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(fetchNewsApi.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

export { fetchNewsApi };
export default newsApiSlice.reducer;
