import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="my-3 py-4 border-blue-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="">
              <div className="text-xs">
                {item.card.info.isVeg ? "[🟢]" : "[🔴]"}
              </div>
              <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
              <p className="font-semibold">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-gray-500 text-sm my-2">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 flex flex-col items-center ">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-8/12 rounded-lg"
            />
            <button
              className="px-2 py-1 rounded-b-lg text-base font-semibold bg-black text-white shadow-lg hover:bg-blue-500"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
