import { Category } from '../components/ecommerce';
import {Container,Row,Col} from 'react-bootstrap';
const Categories = () => {
  return (
<Container>
            <Row>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
            </Row>
            <Row>
            <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                    <Category/>
                </Col>
            </Row>
        </Container>
  )
}

export default Categories