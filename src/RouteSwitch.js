/* eslint-disable react/jsx-no-bind */
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import App from './App';
import Nav from './Nav';
import Cart from './shop/Cart';
import { ItemOverview } from './shop/ItemOverview';
import { Item } from './shop/Item';
import itemList from './itemList';

function RouteSwitch() {
  const [state, setState] = useState({
    items: itemList,
    subtotal: 0,
    cool: true
  });

  const coolFunction = function () {
    setState((prevState) => ({
      ...prevState,
      cool: state.cool !== true
    }));
  };

  const changeQty = (e) => {
    e.preventDefault();
    const currentState = { ...state };
    const itemArray = currentState.items;
    const currentID = e.target.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    if (e.target.textContent === '+') {
      itemArray[itemIndex].qty++;
    } else if (itemArray[itemIndex].qty > 0) {
      itemArray[itemIndex].qty--;
    }

    setState({
      ...state,
      items: itemArray
    });
  };

  const handleChange = (e) => {
    const currentState = { ...state };
    const itemArray = currentState.items;
    const currentID = e.target.parentNode.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    itemArray[itemIndex].qty = e.target.value;

    setState({
      ...state,
      items: itemArray
    });
  };

  const addToCart = (e) => {
    e.preventDefault();

    const currentState = { ...state };
    const subtotal = Number(currentState.subtotal);
    const itemArray = currentState.items;
    const currentID = e.target.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    const qty = e.target.quantity.value;

    if (qty == 0) {
      return;
    }
    itemArray[itemIndex].qtyToBuy += Number(qty);

    const updatedSubtotal = calculateSubtotal(itemArray);
    console.log(updatedSubtotal);

    setState({
      ...state,
      items: itemArray,
      subtotal: updatedSubtotal
    });

    alert(`${qty} ${itemArray[itemIndex].name}(s) has been added to your cart.`);
  };

  const calculateSubtotal = function combinePricesAndQties(itemArray) {
    let total = 0;
    for (let i = 0; i < itemArray.length; i++) {
      const sub = itemArray[i].qtyToBuy * itemArray[i].price;
      total += sub;
    }
    total = total.toFixed(2);
    return total;
  };

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
          <Route
            path="/items/:id"
            element={
              <Item
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
}

export default RouteSwitch;
