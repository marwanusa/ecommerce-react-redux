import styles from "./styles.module.css"
import { Button } from "react-bootstrap"
const {btn,productImg,productContainer} = styles;
interface IProps {
    id: number;
    title: string;
    price: number;
    cat_prefix: string;
    img: string; 
}
const Product = ({title,price,img}:IProps) => {
    return (
        <div className={productContainer}>
            <img className={productImg} src={img} alt={title} />
            <h6>{title}</h6>
            <p>{price} EGP</p>
            <Button variant="info" className={btn}>Add To Cart</Button>
        </div>
    )
}

export default Product