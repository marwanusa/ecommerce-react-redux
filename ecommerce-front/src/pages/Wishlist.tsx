import { useEffect } from "react";
import { GridList, Heading } from "../components/common"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { actGetWishlist ,productsFullInfoCleanUp} from "../store/wishlist/wishlistSlice"
import { Loading } from "../components/feedback";
import { TProduct } from "../types/product";
import { Product } from "../components/ecommerce";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

  return (
    <>
      <Heading>Your Wishlist</Heading>
      <Loading status={loading} error={error}>
      {records && records.length === 0 && <p>No items in your wishlist</p>}
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist