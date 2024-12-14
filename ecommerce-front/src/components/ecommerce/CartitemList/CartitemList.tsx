import { TProduct } from "../../../types/product"
import CartItem from "../CartItem/CartItem"

type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};
const CartitemList = ({products,changeQuantityHandler,removeItemHandler}:CartItemListProps) => {
    const renderList = products.map(ele => <CartItem key={ele.id} {...ele} removeItemHandler={removeItemHandler} changeQuantityHandler={changeQuantityHandler}/>)
  return (
    <div>{renderList}</div>
  )
}

export default CartitemList