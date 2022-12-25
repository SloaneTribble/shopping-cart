import React from "react";
import { ItemOverview } from "./ItemOverview";

const ItemContainer = (items) => {
  return (
    <div>
      <ItemOverview items={items} />
    </div>
  );
};

export { ItemContainer };
