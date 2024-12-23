import { memo, useEffect, useState } from "react";
import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { TProduct } from "../../../types/product";
import Like from "../../../assets/svg/like.svg?react"
import FilledLike from "../../../assets/svg/like-fill.svg?react"
import styles from "./styles.module.css"
import { Button, Spinner } from "react-bootstrap"
import actLikeToggle from "../../../store/wishlist/act/actLikeToggle";
const { btn, productImg, productContainer ,maximumNotice,wishlistBtn} = styles;

const Product = memo(({ id, title, price, img,max,quantity,isLiked }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isLoading,setIsLoading] = useState(false);
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
    const actLikeToggleHandler = () => {
        if(isLoading)
        {
            return;
        }
        setIsLoading(true)
        dispatch(actLikeToggle(id)).unwrap().then(()=> setIsLoading(false)).catch(()=>setIsLoading(false))
    }

    return (
        <div className={productContainer}>
        <div className={wishlistBtn}>
            {
              isLoading? <Spinner animation="border" size="sm" variant="primary" /> : isLiked ? <FilledLike  onClick={actLikeToggleHandler}/> : <Like  onClick={actLikeToggleHandler}/>
            }      
        </div>
            <img className={productImg} src={img} alt={title} />
            <h6>{title}</h6>
            <p className="mb-1">{price.toFixed(2)} EGP</p>
            <p className={maximumNotice}>{isQuantityReachedToMax ? "You Reached To Max Quantity" : `You Can Add: ${currentRemainingQuantity}`}</p>
            <Button disabled={isBtnDisabled || isQuantityReachedToMax} variant="info" className={btn} onClick={addToCartHandler}>{isBtnDisabled ? (<><Spinner animation="border" size="sm"/> Loading...</>):"Add To Cart"}</Button>
        </div>
    )
})

export default Product