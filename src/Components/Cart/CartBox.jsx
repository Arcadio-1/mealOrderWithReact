import CartItem from "./CartItem";
import { Fragment, useContext, useState } from "react";
import Cartcontext from "../../store/cart-context";
import Chechout from "./checkout";
const CartBox = (props) => {
  const [order, setOreder] = useState(false);
  const [success, setsuccess] = useState(false);
  const orderHandler = () => {
    setOreder(true);
  };
  const cartCTX = useContext(Cartcontext);
  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const addHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    cartCTX.removeItem(id);
  };
  const succesHandler = () => {
    setsuccess(true);
  };
  const showOrder = cartCTX.items.length > 0;
  return (
    <div className="order-box">
      {success && (
        <div className="order-box-succes">
          <p>successful !</p>
          <button onClick={props.onCloseCart}>close</button>
        </div>
      )}
      {!success && (
        <Fragment>
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
          {!order && (
            <div className="order-box-action">
              <button
                onClick={props.onCloseCart}
                className="order-box-action-close"
              >
                close
              </button>
              {showOrder && (
                <button
                  className="order-box-action-order"
                  onClick={orderHandler}
                >
                  order
                </button>
              )}
            </div>
          )}
          {order && (
            <Chechout
              onCloseCart={props.onCloseCart}
              onsucces={succesHandler}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};
export default CartBox;
