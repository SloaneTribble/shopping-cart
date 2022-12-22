import React, { Component } from "react";

function ItemOverview({ items }) {
  let overview;
  let itemArray = items;

  overview = itemArray.map((item) => (
    <ul className="item" key={item.id}>
      <li className="item-detail">{item.name}</li>
    </ul>
  ));

  return <div className="item-overview">{overview}</div>;
}

export { ItemOverview };
