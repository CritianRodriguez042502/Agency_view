import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js";

export const axiosBlogDetail = createAsyncThunk("blogDetail", async (slug) => {
  const url = `${config.env.base_url_server}/blog/blog_detail/?slug=${slug}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Este blog no existe");
  }
});

const blogDetailSlice = createSlice({
  name: "blogDetail",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosBlogDetail.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosBlogDetail.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosBlogDetail.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default blogDetailSlice.reducer;
