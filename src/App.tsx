import React, { useState } from "react";
import ItemList, { ShoppingItem } from "./components/ItemList";
import "./assets/main.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const toggleItemSelected = (item: ShoppingItem) => {
    setShoppingItems(
      shoppingItems.map(currentItem =>
        item.id === currentItem.id
          ? { ...currentItem, selected: !currentItem.selected }
          : currentItem
      )
    );
  };

  const removeItem = (item: ShoppingItem) => {
    setShoppingItems(shoppingItems.filter(currentItem => item.id !== currentItem.id));
  };

  return (
    <div className="App">
      <header className="bg-blue-700 p-3">
        <h1 className="text-2xl text-center text-white">Shopping Buddy</h1>
      </header>

      <div className="p-3">
        <label>
          Add Item
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 mx-3"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShoppingItems([
              ...shoppingItems,
              { id: shoppingItems.length++, name: newItem, selected: false }
            ]);
          }}
        >
          Add
        </button>
      </div>

      <ItemList
        items={shoppingItems}
        removeItem={removeItem}
        toggleItemSelected={toggleItemSelected}
      />
    </div>
  );
}

export default App;
