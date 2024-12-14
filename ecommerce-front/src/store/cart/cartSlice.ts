import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../types/product";
import actGetProductsByItems from "./actGetProductsByItems/actGetProductsByItems";
import { TLoading } from "../../types/shared";
interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
  loading:TLoading;
  error: null | string
}
const initialState: ICartState = {
  items: {},
  productFullInfo: [
    
  ],
  loading:"idle",
  error:null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id] < 8) {
        state.items[id]++;
      }
      else
         {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity:(state,action)=>{
      state.items[action.payload.id] = action.payload.quantity
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
  },
  },
  extraReducers:(builder)=>{
    builder.addCase(actGetProductsByItems.pending,(state)=>{
        state.loading = "pending";
        state.error = null;
    })
    builder.addCase(actGetProductsByItems.rejected,(state,action)=>{
        state.loading = "failed";
        if(action.payload && typeof(action.payload) == "string")
            {
            state.error = action.payload;
            }
    })
    builder.addCase(actGetProductsByItems.fulfilled,(state,action)=>{
        state.loading = "succeeded";
        state.productFullInfo = action.payload;

    })
}
});

export const { addToCart , cartItemChangeQuantity ,cartItemRemove} = cartSlice.actions;
export default cartSlice.reducer;
export {actGetProductsByItems};