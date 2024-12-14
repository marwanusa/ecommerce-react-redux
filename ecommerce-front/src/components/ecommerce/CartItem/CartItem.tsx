import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { memo, useCallback } from "react";
import { TProduct } from "../../../types/product";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;
  type CartItemProps = TProduct & {
    changeQuantityHandler: (id: number, quantity: number) => void;
    removeItemHandler: (id: number) => void;
  };
const CartItem = memo(({id,img,title,quantity,max,price,removeItemHandler,changeQuantityHandler}: CartItemProps) => {
  const dispatch  = useAppDispatch();

  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newQuantity = parseInt(event.target.value);
  //   if (newQuantity >= 1) {
  //     dispatch(cartItemChangeQuantity({ id, quantity: newQuantity }));
  //   }
  // };

  // const handleRemoveBtn = useCallback(() => {
  //   dispatch(cartItemRemove({id}));
  // },[dispatch])

  const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +event.target.value;
    changeQuantityHandler(id, quantity);
  };

  console.log("render");
  
  return (
<div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src={img}
            alt="title"
          />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white",width:"100px" }}
            className="mt-auto"
            onClick={() => removeItemHandler(id)}
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select onChange={changeQuantity} defaultValue={quantity} aria-label="Default select example">
          {
            Array.from({length:max},(_,i)=>i+1).map((item)=>{
              return <option  key={item} value={item}>{item}</option>
            }
            )
          }
        </Form.Select>
      </div>
    </div>
  )
})

export default CartItem