import { Category } from '../components/ecommerce';
import {Container,Row,Col} from 'react-bootstrap';
import { useAppDispatch , useAppSelector } from '../store/hooks';
import {actGetCategories} from "../store/categories/categoriesSlice"
import { useEffect } from 'react';
const Categories = () => {
    const dispatch = useAppDispatch();
    const {loading,records,error} = useAppSelector((state)=>state.categories)
    useEffect(()=>{
      if(!records.length)
      {
        dispatch(actGetCategories())
      }
    },[dispatch,records])
    const categoriesList = records.length > 0 ? records.map((category)=>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category key={category.id} {...category}/>
        </Col>
    ) : "There are no categories" ;
  return (
<Container>
            <Row>
            {categoriesList}
            </Row>
        </Container>
  )
}

export default Categories