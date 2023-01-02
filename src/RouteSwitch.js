/* eslint-disable react/jsx-no-bind */
import React, { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
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
    const currentID = e.currentTarget.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    if (e.currentTarget.textContent === '+') {
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
    const currentID = e.currentTarget.parentNode.id;

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
    const itemArray = currentState.items;
    const currentID = e.target.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    const qty = e.currentTarget.quantity.value;

    if (Number(qty) === 0) {
      return;
    }
    itemArray[itemIndex].qtyToBuy += Number(qty);

    const updatedSubtotal = calculateSubtotal(itemArray);

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

  const del = function deleteFromCart(e) {
    e.preventDefault();

    const currentState = { ...state };
    const itemArray = currentState.items;
    console.log(e.currentTarget.parentNode.id);
    const currentID = e.currentTarget.parentNode.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    itemArray[itemIndex].qtyToBuy = 0;

    const updatedSubtotal = calculateSubtotal(itemArray);

    setState({
      ...state,
      items: itemArray,
      subtotal: updatedSubtotal
    });
  };

  return (
    <div className="main-container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/shopping-cart"></Navigate>} />
          <Route path="shopping-cart" element={<App />} />
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
          <Route
            path="/cart"
            element={<Cart items={state.items} total={state.subtotal} del={del} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default RouteSwitch;
