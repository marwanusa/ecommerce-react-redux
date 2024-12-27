import { Container } from "react-bootstrap";
import { Link} from "react-router-dom";
import {LottieHandler} from "../components/feedback";

const Error = () => {
    return (
        <Container  style={{ marginTop: '60px' }}>
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <LottieHandler width="600px" type="notFound" message="Oops! Something went wrong." />
                <Link to="/" replace={true} >How about going back to the home page?</Link>
            </div>
        </Container>
    )
}

export default Error