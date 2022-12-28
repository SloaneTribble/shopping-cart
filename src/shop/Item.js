import React, { Component } from "react";
import { Link } from "react-router-dom";

function Item({ items, coolFunction, changeQty, addToCart, handleChange }) {
  let overview;
  let itemArray = items;

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <Link to={`/items/${item.id}`}>{item.name}</Link>
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
  ));

  return (
    <div>
      <button onClick={coolFunction}>Cool!</button>
      <div className="item-overview">{overview}</div>
    </div>
  );
}

export { Item };