import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosJWTRefresh = createAsyncThunk("JWTRefresh", async (data) => {
  const url = `${config.env.base_url_server}/user_system/auth/jwt/refresh/`;
  const response = await axios.post(url, data);
  return response.data;
});

const initialState = {
  info : null,
  status: null,
  error: null,
};

const JWTRefresh = createSlice({
  name: "JWTRefresh",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosJWTRefresh.pending, function (state) {
      state.status = "pending";
    });

    builder.addCase(axiosJWTRefresh.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload
      localStorage.setItem("access", JSON.stringify(action.payload.access));
    });

    builder.addCase(axiosJWTRefresh.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default JWTRefresh.reducer;
