import { useCallback, useEffect } from "react";
import { Heading } from "../components/common";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetProductsByItems } from "../store/cart/cartSlice";
import {CartSubtotalPrice} from "../components/ecommerce";
import { Loading } from "../components/feedback";
import CartitemList from "../components/ecommerce/CartitemList/CartitemList";
import {cartItemChangeQuantity,cartItemRemove} from "../store/cart/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items , productFullInfo , loading , error} = useAppSelector((state) => state.cart);
  const products = productFullInfo.map((ele)=>({...ele , quantity:items[ele.id]}))
  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch, items]);

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
      {
        !products.length ? <p>Cart is empty</p> : 
        <>
        <CartitemList changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler} products={products} />
        <CartSubtotalPrice products={products}/>
        </>
    } 
      </Loading>
    </>
  );
};

export default Cart;