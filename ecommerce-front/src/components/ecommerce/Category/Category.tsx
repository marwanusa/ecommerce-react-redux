import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const {categoryImg, categoryContainer} = styles;
interface IProps {
    img: string;
    title: string;
    prefix:string;   
}
const Category = ({title,img,prefix}:IProps) => {
    return (
        <div className={categoryContainer}>
            <Link to ={`/categories/products/${prefix}`} >
            <img className={categoryImg} src={img} alt={title} />
            <p>{title}</p>
            </Link>
        </div>

    )
}

export default Category