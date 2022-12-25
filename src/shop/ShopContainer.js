import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import uniqid from "uniqid";
import Cart from "./Cart";
import { ItemOverview } from "./ItemOverview";

function ShopContainer() {
  const [state, setState] = useState({
    items: [
      {
        id: uniqid(),
        name: "Toad's Creamed Chipped Beef",
        price: 2.32,
        qty: 0,
      },
      {
        id: uniqid(),
        name: "Chicken and Egg Combo-Can",
        price: 1.89,
        qty: 0,
      },
    ],
  });
  return (
    <div className="shop">
      <span>Shop</span>
      <Outlet />
      <Cart items={state.items} />
    </div>
  );
}

export default ShopContainer;
