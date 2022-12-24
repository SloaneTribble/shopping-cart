import React, { useContext } from "react";
import { UserContext } from "./ShopContainer";

function ItemOverview() {
  const { state } = useContext(UserContext);
  let overview;
  let itemArray = state.items;

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
      <li className="item-detail">{item.price}</li>
      <li className="qty">Amount to Buy: {item.qty}</li>
    </ul>
  ));

  return <div className="item-overview">{overview}</div>;
}

export { ItemOverview };
