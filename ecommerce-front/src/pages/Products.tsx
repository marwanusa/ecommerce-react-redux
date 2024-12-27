import { Container } from "react-bootstrap"
import { Product } from "../components/ecommerce"
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from "react";
import { actGetProducts, cleanUP } from "../store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "../components/feedback";
import { GridList } from "../components/common";
import {Heading} from "../components/common";
import { TCategory } from "../types/category";
const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, records, error } = useAppSelector((state) => state.products)
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const porductFullInfo = records.map((product) => ({ ...product, quantity: cartItems[product.id] || 0 ,isLiked:wishListItemsId.includes(product.id)}))
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string))
    return () => {
      dispatch(cleanUP())
    }
  }, [dispatch, params])

  return (
    <Container>
      <Loading type="product" status={loading} error={error}>
        <Heading ><span className="text-capitalize">{params.prefix}</span> Products</Heading>
        <GridList records={porductFullInfo} renderItem={(record) => <Product {...record} />} massage={"There Are No Products"} />
      </Loading>
    </Container>
  )
}

export default Products