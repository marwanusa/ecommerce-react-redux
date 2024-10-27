import { Button, Col, Container, Row } from "react-bootstrap"
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"
const Error = () => {
    const error = useRouteError();
    let errorStatus: number;
    let errorStatusText: string;
    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
    } else {
        errorStatus = 404;
        errorStatusText = "Page Not Found";
    }
    return (
        <Container className="text-center" style={{ marginTop: '100px' }}>
            <Row>
                <Col>
                    <h1 style={{ fontSize: "90px" }}>{errorStatus}</h1>
                    <h3>{errorStatusText}</h3>
                    <Button variant="primary" href="/">
                        <Link to="/" replace={true} style={{ color: 'white', textDecoration: 'none' }}>Go Home</Link>
                    </Button>      </Col>
            </Row>
        </Container>
    )
}

export default Error