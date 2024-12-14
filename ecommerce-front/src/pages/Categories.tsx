import { Category } from '../components/ecommerce';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actGetCategories } from "../store/categories/categoriesSlice"
import { useEffect } from 'react';
import { Loading } from '../components/feedback';
import { GridList, Heading } from '../components/common';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.categories)
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories())
    }
  }, [dispatch, records])
  return (
    <Container>
      <Loading status={loading} error={error}>
        <Heading>Categories</Heading>
        <GridList records={records} renderItem={(record)=> <Category {...record}  />}empty={"There Are No Categories"} />
      </Loading>
    </Container>
  )
}

export default Categories