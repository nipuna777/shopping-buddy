import React from "react";
import { ShoppingItem } from "./ItemList";

const ListItem = ({
  item,
  toggleItemSelected,
  removeItem
}: {
  item: ShoppingItem;
  toggleItemSelected: (item: ShoppingItem) => void;
  removeItem: (item: ShoppingItem) => void;
}) => (
  <div className="flex p-2 m-2 rounded-sm shadow border-gray-200 border hover:bg-gray-100">
    <label className="flex-1">
      <input
        type="checkbox"
        className="form-checkbox"
        checked={item.selected}
        onChange={() => toggleItemSelected(item)}
      />
      <span className="pl-2">{item.selected ? <s>{item.name}</s> : item.name}</span>
    </label>
    <button
      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded text-sm"
      onClick={() => removeItem(item)}
    >
      Delete
    </button>
  </div>
);

export default ListItem;
