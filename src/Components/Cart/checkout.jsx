import { useContext, useEffect, useState } from "react";
import useInputValidation from "../../Hook/use-inputValidation";
import Cartcontext from "../../store/cart-context";

const Chechout = (props) => {
  const cardCTX = useContext(Cartcontext);
  const cancelHandler = () => {
    props.onCloseCart();
  };
  const [formValidation, setFormValidation] = useState(false);

  const {
    value: name,
    valueVali: nameVali,
    inputHasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    value: street,
    valueVali: streetVali,
    inputHasError: streetError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    value: postal,
    valueVali: postalVali,
    inputHasError: postalError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetpostal,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    value: city,
    valueVali: cityVali,
    inputHasError: cityError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetcity,
  } = useInputValidation((value) => value.trim() !== "");
  useEffect(() => {
    if (nameVali && streetVali && postalVali && cityVali) {
      setFormValidation(true);
    } else {
      setFormValidation(false);
    }
  }, [nameVali, streetVali, postalVali, cityVali]);

  const confirmHandler = (e) => {
    e.preventDefault();
    if (formValidation) {
      const oreder = { name, street, postal, city, ...cardCTX.items };
      const orderList = async () => {
        const request = await fetch(
          "https://vast-verve-344100-default-rtdb.firebaseio.com/order.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(oreder),
          }
        );
        if (request.ok) {
          console.log("success");
        }
      };
      orderList();
      cardCTX.clearItems();
      props.onsucces();
      // props.onCloseCart();
      resetName();
      resetStreet();
      resetpostal();
      resetcity();
    }
  };

  return (
    <form className="checkout-form">
      <div className="checkout-form-sec checkout-form-name">
        <label htmlFor="name">your name</label>
        <input
          className={nameError ? "invalid-input" : ""}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
          id="name"
          type="text"
        />
        {nameError && <p>inset name !</p>}
      </div>
      <div className="checkout-form-sec checkout-form-name">
        <label htmlFor="street">street</label>
        <input
          className={streetError ? "invalid-input" : ""}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={street}
          id="street"
          type="text"
        />
        {streetError && <p>inset name !</p>}
      </div>
      <div className="checkout-form-sec checkout-form-postalCode">
        <label htmlFor="postalCode">postal Code</label>
        <input
          className={postalError ? "invalid-input" : ""}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={postal}
          id="postalCode"
          type="text"
        />
        {postalError && <p>inset name !</p>}
      </div>
      <div className="checkout-form-sec checkout-form-city">
        <label htmlFor="city">city</label>
        <input
          className={cityError ? "invalid-input" : ""}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={city}
          id="city"
          type="text"
        />
        {cityError && <p>inset name !</p>}
      </div>
      <div className="checkout-form-actions">
        <button
          className="checkout-form-actions-cancel"
          onClick={cancelHandler}
        >
          cancel
        </button>
        <button
          disabled={!formValidation}
          className="checkout-form-actions-confirm"
          onClick={confirmHandler}
        >
          confirm
        </button>
      </div>
    </form>
  );
};
export default Chechout;
