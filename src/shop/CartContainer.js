import React, { useContext } from "react";
import Cart from "./Cart";
import { UserContext } from "./ShopContainer";

function CartContainer() {
  const { state } = useContext(UserContext);
  return (
    <div>
      <Cart items={state.items} />
    </div>
  );
}

export default CartContainer;
