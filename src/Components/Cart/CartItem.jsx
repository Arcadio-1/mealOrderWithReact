const CartItem = (props) => {
  return (
    <li className="order-box-list-item" id={props.id}>
      <div className="order-box-list-item-data">
        <p className="order-box-list-item-data-title">{props.name}</p>
        <div>
          <span className="order-box-list-item-data-price">${props.price}</span>
          <span className="order-box-list-item-data-amount">
            x{props.amount}
          </span>
        </div>
      </div>
      <div className="order-box-list-item-amount">
        <button
          onClick={props.onRemove}
          className="order-box-list-item-amount-increase"
        >
          -
        </button>
        <button
          onClick={props.onAdd}
          className="order-box-list-item-amount-decrease"
        >
          +
        </button>
      </div>
    </li>
  );
};
export default CartItem;
