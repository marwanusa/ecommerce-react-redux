import styles from "./styles.module.css";
const {categoryImg, categoryContainer} = styles;
const Category = () => {
    return (
        <div className={categoryContainer}>
            <img className={categoryImg} src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg" alt="img" />
            <p>title</p>
        </div>

    )
}

export default Category