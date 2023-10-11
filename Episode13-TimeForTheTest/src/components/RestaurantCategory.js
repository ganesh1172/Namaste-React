// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* {header} */}
      <div className="my-4 bg-blue-50 rounded-lg p-4">
        <div
          className="flex justify-between items-center overflow-hidden transition-all cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔽" : "🔼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* accord body */}
    </div>
  );
};

export default RestaurantCategory;
