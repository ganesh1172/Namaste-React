// import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

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
  // const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] shadow-xl rounded-xl hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-semibold my-1 text-base">
        {name.length > 25 ? `${name.substring(0, 25)}...` : name}
      </h3>
      <div className="text-sm">
        <p>{cuisines.slice(0, 3).join(", ")}</p>
        <p>🏡 {areaName}</p>
      </div>
      <ul className="flex justify-between items-center mt-1.5 text-sm font-semibold">
        <li
          className={`px-1.5 py-0.5 rounded-lg ${
            avgRating > 4 ? "bg-green-400" : "bg-red-500"
          }`}
        >
          ⭐{avgRating}
        </li>
        <li>🛣️{sla.lastMileTravelString}</li>
        <li>{costForTwo}</li>
        {/* <p>
          username : <span className="font-bold">{loggedInUser}</span>
        </p> */}
      </ul>
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
