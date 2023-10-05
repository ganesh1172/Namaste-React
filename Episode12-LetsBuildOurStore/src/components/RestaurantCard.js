import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[300px] max-h-[32rem] bg-gray-300 rounded-lg hover:bg-gray-400">
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
        <p>
          username : <span className="font-bold">{loggedInUser}</span>
        </p>
      </div>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
