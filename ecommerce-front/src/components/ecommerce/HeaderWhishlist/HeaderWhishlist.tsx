import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/svg/whishlist.svg?react"
//import { useAppSelector } from "../../../store/hooks";
import styles from "./styles.module.css";
import { useAppSelector } from "../../../store/hooks";
const { totalNum, container, pumpAnimate, iconContainer } = styles;
const HeaderWhishlist = () => {
  const navigate = useNavigate();
    const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const totalQuantity = wishListItemsId.length;
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconContainer}>
        <Logo title="basket icon" />
        {totalQuantity > 0 && (<div className={`${totalNum} ${isAnimate ? pumpAnimate : ""}`} >
          {totalQuantity}
        </div>)}

      </div>
      <h6>Wishlist</h6>
    </div>
  )
}

export default HeaderWhishlist