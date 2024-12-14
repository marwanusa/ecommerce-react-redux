import { memo, useEffect, useState } from "react";
import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { TProduct } from "../../../types/product";
import styles from "./styles.module.css"
import { Button, Spinner } from "react-bootstrap"
const { btn, productImg, productContainer ,maximumNotice} = styles;

const Product = memo(({ id, title, price, img,max,quantity }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnClicked, setIsBtnClicked] = useState(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const currentRemainingQuantity = max - (quantity ?? 0) // Nullish coalescing operator
    const isQuantityReachedToMax =  currentRemainingQuantity <= 0;
    
    useEffect(() => {
        if (!isBtnClicked) {
            return
        }
        setIsBtnDisabled(true)
        const debounce = setTimeout(() => {
            setIsBtnDisabled(false)
        }, 400)
        return () => clearTimeout(debounce)
    }, [isBtnClicked])

    const addToCartHandler = () => {
        dispatch(addToCart(id))
        setIsBtnClicked((prev) => prev + 1);
    }

    return (
        <div className={productContainer}>
            <img className={productImg} src={img} alt={title} />
            <h6>{title}</h6>
            <p className="mb-1">{price.toFixed(2)} EGP</p>
            <p className={maximumNotice}>{isQuantityReachedToMax ? "You Reached To Max Quantity" : `You Can Add: ${currentRemainingQuantity}`}</p>
            <Button disabled={isBtnDisabled || isQuantityReachedToMax} variant="info" className={btn} onClick={addToCartHandler}>{isBtnDisabled ? (<><Spinner animation="border" size="sm"/> Loading...</>):"Add To Cart"}</Button>
        </div>
    )
})

export default Product