import React, { useState } from "react";

import uniqid from "uniqid";
import { ItemOverview } from "./ItemOverview";

function ShopContainer() {
  const [state, setState] = useState({
    items: [
      {
        id: uniqid(),
        name: "Toad's Creamed Chipped Beef",
        price: 2.32,
      },
      {
        id: uniqid(),
        name: "Chicken and Egg Combo-Can",
        price: 1.89,
      },
    ],
  });
  return (
    <div className="shop">
      <span>Shop</span>
      <ItemOverview items={state.items} />
    </div>
  );
}

export default ShopContainer;
