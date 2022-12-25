import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import ShopContainer from "./shop/ShopContainer";
import Cart from "./shop/Cart";
import { ItemContainer } from "./shop/ItemContainer";
import uniqid from "uniqid";
import { useState } from "react";
import { ItemOverview } from "./shop/ItemOverview";

const RouteSwitch = () => {
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
    cool: true,
  });

  return (
    <div className="main-container">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/items" element={<ItemOverview items={state.items} />} />
          <Route path="/cart" element={<Cart items={state.items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
