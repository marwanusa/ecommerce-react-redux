import { createSlice } from "@reduxjs/toolkit"
import actGetProducts from "./act/actGetProducts";
interface IProductsState {
    records: {
        id: number;
        title: string;
        price: number;
        cat_prefix: string;
        img: string;
      }[];
    loading: "idle" | "pending" | "succeeded" | "failed";
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