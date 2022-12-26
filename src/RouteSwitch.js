import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import Cart from "./shop/Cart";
import uniqid from "uniqid";
import { useState, useEffect } from "react";
import { ItemOverview } from "./shop/ItemOverview";

const RouteSwitch = () => {
  const [state, setState] = useState({
    items: [
      {
        id: uniqid(),
        name: "Toad's Creamed Chipped Beef",
        price: 2.32,
        qty: 0,
        qtyToBuy: 0,
      },
      {
        id: uniqid(),
        name: "Chicken and Egg Combo-Can",
        price: 1.89,
        qty: 0,
        qtyToBuy: 0,
      },
    ],
    cool: true,
  });

  const coolFunction = function () {
    setState((prevState) => ({
      ...prevState,
      cool: state.cool === true ? false : true,
    }));
  };

  const changeQty = (e) => {
    e.preventDefault();
    let currentState = { ...state };
    let itemArray = currentState.items;
    let currentID = e.target.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    if (e.target.textContent === "+") {
      itemArray[itemIndex].qty++;
    } else {
      if (itemArray[itemIndex].qty > 0) {
        itemArray[itemIndex].qty--;
      }
    }

    setState({
      ...state,
      items: itemArray,
    });
  };

  const handleChange = (e) => {
    let currentState = { ...state };
    let itemArray = currentState.items;
    let currentID = e.target.parentNode.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    itemArray[itemIndex].qty = e.target.value;

    setState({
      ...state,
      items: itemArray,
    });
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  useEffect(() => {
    console.log(state.cool);
  }, [state.cool]);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/items"
            element={
              <ItemOverview
                items={state.items}
                coolFunction={coolFunction}
                changeQty={changeQty}
                handleChange={handleChange}
                addToCart={addToCart}
              />
            }
          />
          <Route path="/cart" element={<Cart items={state.items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
