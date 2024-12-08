import { RootState } from "../../index";
import { createSelector} from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector((state:RootState)=> state.cart.items,(items)=>{
    const totalQuantity = Object.values(items).reduce((a, c) => a + c, 0)
    return totalQuantity;
  })
  
  export default getCartTotalQuantitySelector;