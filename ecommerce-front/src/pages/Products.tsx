import { Container } from "react-bootstrap"
import { Product } from "../components/ecommerce"
import { useAppDispatch , useAppSelector } from '../store/hooks';
import { useEffect } from "react";
import { actGetProducts, cleanUP } from "../store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "../components/feedback";
import { GridList } from "../components/common";
const Products = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const {loading,records,error} = useAppSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(actGetProducts(params.prefix as string))
        return ()=>{
          dispatch(cleanUP())
        }
    },[dispatch,params])

  return (
<Container>
<Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record)=> <Product {...record} />} empty={"There Are No Products"}/>
      </Loading>
        </Container>
  )
}

export default Products