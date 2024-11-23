import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "../../types/shared";
import { TCategory } from "../../types/category";

interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: null | string;
}
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
  },
  extraReducers:(bulider)=>{
    bulider.addCase(actGetCategories.pending , (state) => {
      state.loading = "pending";
      state.error = null;
    })
    bulider.addCase(actGetCategories.fulfilled , (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    })
    bulider.addCase(actGetCategories.rejected , (state, action) => {
      state.loading = "failed";
      if(action.payload && typeof(action.payload) == "string")
      {
      state.error = action.payload;
      }
    })
  }
});
export {actGetCategories};
export default categoriesSlice.reducer;