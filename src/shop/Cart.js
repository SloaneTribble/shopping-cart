import React from "react";

function Cart({ items }) {
  let overview;
  let itemArray = items;

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
    </ul>
  ));

  return <div className="cart">{overview}</div>;
}

export default Cart;
