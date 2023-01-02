import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

function Item({ items, coolFunction, changeQty, addToCart, handleChange }) {
  const path = useLocation();

  // path.pathname includes the entire current path name
  // the operation below slices the path name at
  //the last index of / plus 1, which removes the forward slash
  const itemID = path.pathname.slice(path.pathname.lastIndexOf("/") + 1);
  console.log(itemID);

  let overview;
  let itemArray = items;

  console.log(itemArray);

  const matchingID = (item) => item.id === itemID;
  const itemIndex = itemArray.findIndex(matchingID);

  console.log(itemIndex);

  const item = itemArray[itemIndex];

  console.log(item);

  overview = (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
      <li className="item-detail">{item.price}</li>
      <li className="increment-decrement"></li>
      <li>
        <form key={item.id} id={item.id} onSubmit={addToCart}>
          <label htmlFor="quantity">Amount desired: </label>
          <input
            type="number"
            id="quantity"
            value={Number(item.qty).toString()}
            onChange={handleChange}
          ></input>
          <button id={item.id} onClick={changeQty}>
            +
          </button>
          <button id={item.id} onClick={changeQty}>
            -
          </button>
          <button type="submit">Add to Cart</button>
        </form>
      </li>
    </ul>
  );

  return (
    <div>
      <button onClick={coolFunction}>Cool!</button>
      <div className="item-overview">{overview}</div>
    </div>
  );
}

export { Item };