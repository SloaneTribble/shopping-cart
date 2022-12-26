import React, { Component } from "react";

function ItemOverview({ items, coolFunction, changeQty }) {
  let overview;
  let itemArray = items;

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
      <li className="item-detail">{item.price}</li>
      <li className="qty">Amount to Buy: {item.qty}</li>
      <li className="increment-decrement">
        <button id={item.id} onClick={changeQty}>
          +
        </button>
        <button id={item.id} onClick={changeQty}>
          -
        </button>
      </li>
    </ul>
  ));

  return (
    <div>
      <button onClick={coolFunction}>Cool!</button>
      <div className="item-overview">{overview}</div>
    </div>
  );
}

export { ItemOverview };
