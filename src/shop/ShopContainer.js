import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import uniqid from "uniqid";
import { ItemOverview } from "./ItemOverview";
import CartContainer from "./CartContainer";

export const UserContext = createContext();
export const UserContextProvider = UserContext.Provider;

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
    <UserContextProvider value={{ state, setState }}>
      <div className="shop">
        <span>Shop</span>
        <ItemOverview />
        <Outlet />
      </div>
    </UserContextProvider>
  );
}

export { ShopContainer };
