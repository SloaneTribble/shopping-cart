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
    itemCount: 0,
    subtotal: 0,
    alert: false,
    alertMsg: ''
  });

  const changeQty = (e) => {
    e.preventDefault();
    const currentState = { ...state };
    const itemArray = currentState.items;

    // selecting items using their current ID -- this method of item selection may conflict with CSS style rules, so it could be considered hacky
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

  const cartAlert = function describeAddition() {
    setState((prevState) => ({
      ...prevState,
      alert: true
    }));

    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        alert: false
      }));
    }, 4500);
  };

  const addToCart = (e) => {
    e.preventDefault();

    const currentState = { ...state };
    const itemArray = currentState.items;
    let itemCount = currentState.itemCount;

    const currentID = e.target.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    const qty = itemArray[itemIndex].qty;

    if (Number(qty) === 0) {
      return;
    }
    itemArray[itemIndex].qtyToBuy += Number(qty);
    itemCount += Number(qty);

    const updatedSubtotal = calculateSubtotal(itemArray);

    const alertMessage = `${qty} ${itemArray[itemIndex].name}(s) has been added to your cart.`;

    setState({
      ...state,
      items: itemArray,
      itemCount: itemCount,
      subtotal: updatedSubtotal,
      alertMsg: alertMessage
    });

    cartAlert();
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
    let itemCount = currentState.itemCount;
    const currentID = e.currentTarget.parentNode.id;

    const matchingID = (item) => item.id === currentID;
    const itemIndex = itemArray.findIndex(matchingID);

    itemCount -= itemArray[itemIndex].qtyToBuy;

    itemArray[itemIndex].qtyToBuy = 0;

    const updatedSubtotal = calculateSubtotal(itemArray);

    setState({
      ...state,
      items: itemArray,
      itemCount: itemCount,
      subtotal: updatedSubtotal
    });
  };

  return (
    <div className="main-container">
      <HashRouter>
        <Nav itemCount={state.itemCount} />
        <Routes>
          <Route path="/" element={<Navigate to="/shopping-cart"></Navigate>} />
          <Route path="shopping-cart" element={<App />} />
          <Route
            path="/items"
            element={
              <ItemOverview
                items={state.items}
                alert={state.alert}
                alertMsg={state.alertMsg}
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
                alert={state.alert}
                alertMsg={state.alertMsg}
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
        <footer>
          <div>
            <a href="https://github.com/SloaneTribble/">github.com/SloaneTribble</a>
          </div>
        </footer>
      </HashRouter>
    </div>
  );
}

export default RouteSwitch;
