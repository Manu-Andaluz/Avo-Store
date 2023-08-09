import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";
import { Dispatch } from "redux";
import {
  JwtPayload,
  LogginResponse,
  User,
  UserFormLoggin,
  UserFormRegister,
} from "../../../types";
import axios from "axios";

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem("userToken") : "",
  email: "",
  name: "",
  isAdmin: false,
  userStatus: "",
  userError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state) => {
      const token = localStorage.getItem("userToken") || "";
      if (token) {
        const key = process.env.NEXT_PUBLIC_JWTSecretKey as string;

        const { email, name, isAdmin } = jwt.verify(token, key) as JwtPayload;

        return {
          ...state,
          email,
          name,
          userStatus: "isUser",
        };
      }
    },
    logOutUser: (state) => {
      const user = localStorage.getItem("userToken") || "";

      if (user) {
        localStorage.removeItem("userToken");
        return {
          ...state,
          token: "",
          email: "",
          name: "",
          isAdmin: false,
          userStatus: "",
          userError: "",
        };
      }
    },
  },
  extraReducers: (builder) => {
    /* login */
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, userStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          email: action.payload.email,
          name: action.payload.name,
          isAdmin: false,
          userStatus: "isUser",
          userError: "",
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        userStatus: "rejected",
        userError: "Mail o Contraseña incorrecto",
      };
    });
    /* register */
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, userStatus: "Creating account" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          email: action.payload.email,
          name: action.payload.name,
          isAdmin: false,
          userStatus: "isUser",
          userError: "",
        };
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        userStatus: "rejected",
        userError: "Missing data",
      };
    });
  },
});

export const { loadUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

export const loginUser = createAsyncThunk(
  "users/login",
  // if you type your function argument here
  async (user: UserFormLoggin, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/loggin`,
        {
          email: user.email,
          password: user.password,
        }
      );
      const token = res.data;
      const key = process.env.NEXT_PUBLIC_JWTSecretKey as string;
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

export const registerUser = createAsyncThunk(
  "users/register",
  async (user: UserFormRegister, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        user
      );
      const token = res.data;
      const key = process.env.NEXT_PUBLIC_JWTSecretKey as string;

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
