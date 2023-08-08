import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";
import { Dispatch } from "redux";
import {
  JwtPayload,
  LogginResponse,
  User,
  UserFormLoggin,
} from "../../../types";
import axios from "axios";

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem("userToken") : "",
  email: "",
  name: "",
  isAdmin: false,
  loginStatus: "",
  loginError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      console.log("pending");
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          token: localStorage.getItem("userToken"),
          email: action.payload.email,
          name: action.payload.name,
          isAdmin: false,
          loginStatus: "completed",
          loginError: "",
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("rejected");
      return {
        ...state,
        loginStatus: "rejected",
        loginError: "Mail o Contraseña incorrecto",
      };
    });
  },
});

export default userSlice.reducer;

export const loginUser = createAsyncThunk(
  "users/loggin",
  // if you type your function argument here
  async (user: UserFormLoggin, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/loggin", {
        email: user.email,
        password: user.password,
      });
      const token = res.data;
      const key = process.env.JWTSecretKey as string;
      console.log("key: ", key, "procces: ", process.env);
      const { email, name, isAdmin } = (await jwt.verify(
        token,
        key
      )) as JwtPayload;

      localStorage.setItem("userToken", token);
      return { email, name, isAdmin };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
