import styles from "./styles.module.css"
import { Button } from "react-bootstrap"
const {btn,productImg,productContainer} = styles;
const Product = () => {
    return (
        <div className={productContainer}>
            <img className={productImg} src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg" alt="" />
            <h6>title</h6>
            <p>10EGP</p>
            <Button variant="info" className={btn}>Primary</Button>
        </div>
    )
}

export default Product