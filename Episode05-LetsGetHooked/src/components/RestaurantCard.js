import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data; //destructring data with optional chain
  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100}/- FOR TWO</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
