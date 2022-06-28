import CartIcon from "../Cart/CartIcon";
import Cartcontext from "../../store/cart-context";
import { useContext } from "react";
import { useEffect, useState } from "react";
const CartButton = (props) => {
  const cartCTX = useContext(Cartcontext);
  const { items } = cartCTX;
  const [btnBump, setBtnBump] = useState(false);
  const buttonClass = `shoping-cart ${btnBump ? "bump" : ""}`;
  useEffect(() => {
    if (items.length < 1) {
      return;
    }
    const bumpTimer = setBtnBump(true);
    setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curentvalue, item) => {
    return curentvalue + item.amount;
  }, 0);
  return (
    <div className={buttonClass} onClick={props.onOpenCart}>
      <span className="shoping-cart-icon">
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className="shoping-cart-amount">{numberOfCartItems}</span>
    </div>
  );
};
export default CartButton;
