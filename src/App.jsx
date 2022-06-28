import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, setcartIsShow] = useState(false);
  const openCartModalHandler = () => {
    setcartIsShow(true);
  };
  const closeCartModalHandler = () => {
    setcartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onCloseCart={closeCartModalHandler} />}
      <Header onOpenCart={openCartModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
