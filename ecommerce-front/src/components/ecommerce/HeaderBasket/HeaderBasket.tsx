import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/svg/cart.svg?react"
import getCartTotalQuantity from "../../../store/cart/selectors";
import { useAppSelector } from "../../../store/hooks";
import styles from "./styles.module.css";
const { basketQuantity, basketContainer, pumpCartQuantity } = styles;
const HeaderBasket = () => {
  const navigate = useNavigate();
  const totalQuantity = useAppSelector(getCartTotalQuantity)
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    if(!totalQuantity){
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={()=>navigate("/cart")}>
      <Logo title="basket icon" />
      <div className={`${basketQuantity} ${isAnimate ? pumpCartQuantity : ""}`} >
        {totalQuantity}
      </div>

    </div>
  )
}

export default HeaderBasket