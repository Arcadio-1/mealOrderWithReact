import CartItem from "./CartItem";
import { useContext } from "react";
import Cartcontext from "../../store/cart-context";
const CartBox = (props) => {
  const cartCTX = useContext(Cartcontext);
  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const addHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    cartCTX.removeItem(id);
  };
  const showOrder = cartCTX.items.length > 0;
  return (
    <div className="order-box">
      <ul className="order-box-list">
        {cartCTX.items.map((item) => {
          return (
            <CartItem
              name={item.name}
              id={item.id}
              amount={item.amount}
              price={item.price}
              key={item.id}
              onAdd={addHandler.bind(null, item)}
              onRemove={removeHandler.bind(null, item.id)}
            />
          );
        })}
      </ul>
      <div className="order-box-total">
        <h3>total amount</h3>
        <p>{totalAmount}</p>
      </div>
      <div className="order-box-action">
        <button onClick={props.onCloseCart} className="order-box-action-close">
          close
        </button>
        {showOrder && <button className="order-box-action-order">order</button>}
      </div>
    </div>
  );
};
export default CartBox;
