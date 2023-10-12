import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatingsString,
    feeDetails,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const catergory =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="w-6/12 m-auto">
      <div className="my-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-base text-gray-600">{cuisines.join(", ")}</p>
          <p className="text-base text-gray-600">
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>
        <div className="text-base border rounded-lg p-2 text-center">
          <h3 className="text-green-600 text-lg font-bold">⭐ {avgRating}</h3>
          <hr className="my-0.5" />
          <p className="text-xs text-gray-500">{totalRatingsString}</p>
        </div>
      </div>
      <p className="text-base text-gray-600">🚴{feeDetails.message} </p>
      <hr className="my-4 border-1 border-gray-400 border-dashed" />
      <div className="flex gap-4 text-base font-semibold">
        <p>🕘{sla.slaString}</p>
        <p>₹ {costForTwoMessage}</p>
      </div>
      {/* catergory accordian */}
      {catergory.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
