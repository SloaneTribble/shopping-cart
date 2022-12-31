import React from 'react';

function Cart({ items, total }) {
  let overview;
  let itemArray = items;

  itemArray = itemArray.filter((item) => item.qtyToBuy > 0);

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
      <li className="item-detail">Amount Desired: {item.qtyToBuy}</li>
      <li className="item-detail">Subtotal: {(item.qtyToBuy * item.price).toFixed(2)}</li>
    </ul>
  ));

  return (
    <div className="cart">
      <div className="overview-contaiiner">{overview}</div>
      <div id="grand-total">Grand Total: {total}</div>
    </div>
  );
}

export default Cart;
