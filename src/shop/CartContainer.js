import React, { useContext } from "react";
import Cart from "./Cart";

function CartContainer({ items }) {
  return (
    <div>
      <Cart items={items} />
    </div>
  );
}

export default CartContainer;
