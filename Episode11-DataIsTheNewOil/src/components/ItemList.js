import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="leading-7">
              <div>{item.card.info.isVeg ? "🌮" : "🍗"}</div>
              <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
              <span className="my-10">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-gray-500 leading-5">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
