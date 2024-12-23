import { HeaderBasket } from "../../ecommerce";
import HeaderWhishlist from "../../ecommerce/HeaderWhishlist/HeaderWhishlist";
import styles from "./styles.module.css"
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const { headerLogo, headerContainer,ecomLogoContainer } = styles;
const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>Our</span>
                    <Badge bg="info">Ecom</Badge>
                </h1>
                <div className={ecomLogoContainer}>
                <HeaderWhishlist/>
                <HeaderBasket/>
                </div>
            </div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                            <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header