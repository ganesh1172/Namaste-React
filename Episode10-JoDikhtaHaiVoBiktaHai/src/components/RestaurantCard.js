import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
  } = resData; //destructring data with optional chain
  return (
    <div className="m-2 p-4 w-[300px] max-h-[32rem] bg-gray-300 rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{areaName}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo.toUpperCase()}</h4>
      <div className="rate-time">
        <p>{avgRating} stars</p>
        <p>{sla.deliveryTime} Minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
