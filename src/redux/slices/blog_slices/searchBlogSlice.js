import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosSearchBlogs = createAsyncThunk(
  "SearchBlogs",
  async (slug) => {
    const url = `${config.env.base_url_server}/blog/search_blogs/?slug=${slug}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const searchBlogsSlice = createSlice({
  name: "searchBlogs",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosSearchBlogs.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosSearchBlogs.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosSearchBlogs.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default searchBlogsSlice.reducer;
