import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../../types/product";

type TResponse = TProduct[];
const actGetWishlist = createAsyncThunk("wishlist/actGetWishlist",
    async(_,thunkAPI)=>{
        const {fulfillWithValue ,rejectWithValue } = thunkAPI
        try{
            const userWishlist = await axios.get<{productId:number}[]>("/wishlist?userId=1")
            if(!userWishlist.data.length)
            {
                return fulfillWithValue([]);
            }else{
                const concatenatedItemsId = userWishlist.data.map((ele)=>`id=${ele.productId}`).join("&");
                const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
                return response.data;
            }
        }catch (error) {
            if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
            } else {
            return rejectWithValue("An unexpected error");
            }
        }
    }
)
export default actGetWishlist;