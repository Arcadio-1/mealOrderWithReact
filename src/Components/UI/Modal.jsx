import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import CartBackDrop from "../Cart/CartBackDrop";
import CartBox from "../Cart/CartBox";
const Modal = (props) => {
  const elementPortol = document.getElementById("overLay");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartBackDrop onCloseCart={props.onCloseCart} />,
        elementPortol
      )}
      {ReactDOM.createPortal(
        <CartBox onCloseCart={props.onCloseCart} />,
        elementPortol
      )}
    </Fragment>
  );
};
export default Modal;
