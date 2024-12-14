import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { TProduct } from "../../../types/product";

type TResponse = TProduct[];
const actGetProductsByItems = createAsyncThunk("cart/GetProductsByItems",
    async (_, thunkAPI) => {
        const {rejectWithValue ,fulfillWithValue, getState} = thunkAPI;
        const {cart} = getState() as RootState;
        const itemsId = Object.keys(cart.items); //[1,2] ?id=1&id=2
        if(!itemsId.length){
            return fulfillWithValue([])
        }
        try {
            const concatenatedItemsId = itemsId.map((id)=>`id=${id}`).join("&");
            const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`);            
            return response.data
        } catch (error) {
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message);
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    }
)
export default actGetProductsByItems;