import { createSlice } from "@reduxjs/toolkit"
import actGetProducts from "./act/actGetProducts";
import { TProduct } from "../../types/product";
import { TLoading } from "../../types/shared";
interface IProductsState {
    records: TProduct[];
    loading: TLoading;
    error: null | string;
  }
const initialState: IProductsState = {
    records:[],
    loading:"idle",
    error:null
}
const productsSlice = createSlice(
    {
        name: 'products',
        initialState,
        reducers: {
            cleanUP:(state)=>{
                state.records = [];
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(actGetProducts.pending,(state)=>{
                state.loading = "pending";
                state.error = null;
            })
            builder.addCase(actGetProducts.rejected,(state,action)=>{
                state.loading = "failed";
                if(action.payload && typeof(action.payload) == "string")
                    {
                    state.error = action.payload;
                    }
            })
            builder.addCase(actGetProducts.fulfilled,(state,action)=>{
                state.loading = "succeeded";
                state.records = action.payload;

            })
        }
    }
)
export const{cleanUP} = productsSlice.actions;
export {actGetProducts};
export default productsSlice.reducer