import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Item({ items, alert, alertMsg, changeQty, addToCart, handleChange }) {
  const path = useLocation();

  // path.pathname includes the entire current path name
  // the operation below slices the path name at
  //the last index of / plus 1, which removes the forward slash
  const itemID = path.pathname.slice(path.pathname.lastIndexOf('/') + 1);

  let overview;
  let itemArray = items;

  const matchingID = (item) => item.id === itemID;
  const itemIndex = itemArray.findIndex(matchingID);

  const item = itemArray[itemIndex];

  overview = (
    <ul className="item" key={item.id}>
      <li className="item-name">{item.name}</li>
      <li className="item-detail">${item.price}</li>
      <li className="increment-decrement"></li>
      <li>
        <form key={item.id} id={item.id} onSubmit={addToCart}>
          <label htmlFor="quantity">Amount desired: </label>
          <input
            type="number"
            id="quantity"
            value={Number(item.qty).toString()}
            onChange={handleChange}></input>
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
      <div className="item-overview">{overview}</div>
      {alert && <div className="lone-alert">{alertMsg}</div>}
    </div>
  );
}

export { Item };
