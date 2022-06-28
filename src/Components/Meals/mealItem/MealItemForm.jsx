import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const inputAmountRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredamount = inputAmountRef.current.value;
    const enteredamountNumber = +enteredamount;
    if (
      enteredamount.trim().length === 0 ||
      enteredamountNumber < 1 ||
      enteredamountNumber > 5
    ) {
      setValidAmount(false);
      return;
    }
    props.onAdd(enteredamountNumber);
  };
  return (
    <form onSubmit={submitHandler} className="meals-list-item-order">
      <div className="meals-list-item-order-amount">
        <Input
          ref={inputAmountRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
          }}
        />
        {!validAmount && <p>Enter Valid Number Between (1-5)</p>}
      </div>
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
