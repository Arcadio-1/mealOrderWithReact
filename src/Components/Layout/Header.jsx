import { Fragment } from "react";
import headerImage from "../../Assets/img/header.png";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className="header-1">
        <h1>ReactMeals</h1>
        <CartButton onOpenCart={props.onOpenCart} />
      </header>
      <div className="header-2">
        <img src={headerImage} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
