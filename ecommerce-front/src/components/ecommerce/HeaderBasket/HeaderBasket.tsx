import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/svg/cart.svg?react"
import getCartTotalQuantity from "../../../store/cart/selectors";
import { useAppSelector } from "../../../store/hooks";
import styles from "./styles.module.css";
const { totalNum, container, pumpAnimate,iconContainer } = styles;
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
    <div className={container} onClick={()=>navigate("/cart")}>
      <div className={iconContainer}>
      <Logo title="basket icon" />
      {totalQuantity >0 &&<div className={`${totalNum} ${isAnimate ? pumpAnimate : ""}`} >
        {totalQuantity}
      </div>}

      </div>
      <h6>Cart</h6>
    </div>
  )
}

export default HeaderBasket