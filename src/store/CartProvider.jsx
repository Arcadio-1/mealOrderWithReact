import Cartcontext from "./cart-context";
import { useReducer } from "react";
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
      // console.log("fuck");
    } else {
      updateItems = state.items.concat(action.item);
    }

    return { items: updateItems, totalAmount: updateTotalAmount };
  }
  if (action.type === "REMOVE") {
    const updateItemindex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const updateItem = state.items[updateItemindex];
    const updateTotalamount = state.totalAmount - updateItem.price;
    let updateItems;
    if (updateItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItems = [...state.items];
      updateItems[updateItemindex] = {
        ...updateItems[updateItemindex],
        amount: updateItem.amount - 1,
      };
    }
    return { items: updateItems, totalAmount: updateTotalamount };
  }
};
const defaultCartState = { items: [], totalAmount: 0 };
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};
export default CartProvider;
