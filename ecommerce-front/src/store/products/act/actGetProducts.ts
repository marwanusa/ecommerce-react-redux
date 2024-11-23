import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
};
const actGetProducts = createAsyncThunk(
  "products/getProducts",
  async (prefix:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default actGetProducts;
