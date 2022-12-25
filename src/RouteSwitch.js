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

  const coolFunction = function () {
    setState((prevState) => ({
      ...prevState,
      cool: state.cool === true ? false : true,
    }));
  };

  const increment = (e) => {
    let currentState = { ...state };
    let itemArray = currentState.items;
    let currentID = e.target.id;

    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i].id === currentID) {
        itemArray[i].qty++;
      }
    }

    setState({
      ...state,
      items: itemArray,
    });
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
                increment={increment}
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
