import React from "react";
import ListItem from "./ListItem";

const ItemList = ({
  items,
  toggleItemSelected,
  removeItem
}: {
  items: ShoppingItem[];
  toggleItemSelected: (item: ShoppingItem) => void;
  removeItem: (item: ShoppingItem) => void;
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {items.map(item => (
      <ListItem
        key={item.id}
        item={item}
        toggleItemSelected={toggleItemSelected}
        removeItem={removeItem}
      />
    ))}
  </div>
);
export default ItemList;

export type ShoppingItem = {
  id: number;
  name: string;
  selected: boolean;
};
