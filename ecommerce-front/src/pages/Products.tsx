import { Container,Row,Col } from "react-bootstrap"
import { Product } from "../components/ecommerce"
import { useAppDispatch , useAppSelector } from '../store/hooks';
import { useEffect } from "react";
import { actGetProducts, cleanUP } from "../store/products/productsSlice";
import { useParams } from "react-router-dom";

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
    const productsList = records.length > 0 ? records.map((product) => (
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
        <Product key={product.id} {...product}/>
        </Col>
    )):"There are no products"
  return (
<Container>
            <Row>
            {productsList}
            </Row>
        </Container>
  )
}

export default Products