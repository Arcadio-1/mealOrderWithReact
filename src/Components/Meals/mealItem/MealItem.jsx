import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import Cartcontext from "../../../store/cart-context";
const MealItem = (props) => {
  // console.log(props.meal);
  const cartCTX = useContext(Cartcontext);
  const price = ` $${props.meal.price.toFixed(2)}`;
  const addHandler = (amount) => {
    cartCTX.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  return (
    <li className="meals-list-item" key={props.meal.id}>
      <div className="meals-list-item-data">
        <p className="meals-list-item-data-title">{props.meal.name}</p>
        <p className="meals-list-item-data-decription">{props.meal.desc}</p>
        <p className="meals-list-item-data-price">{price}</p>
      </div>
      <MealItemForm onAdd={addHandler} />
    </li>
  );
};
export default MealItem;
