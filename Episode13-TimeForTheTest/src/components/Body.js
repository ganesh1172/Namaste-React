import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const { loggedInUser, setUserName } = useContext(UserContext);

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();
    // Optional Chaining
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return (
    <div className="pt-10">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-4">
          <div className="search flex w-6/12">
            <input
              type="text"
              data-testid="searchInput"
              className="w-10/12 p-2 border-2 rounded-l-lg border-black"
              placeholder="Enter restaurant name...."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-2 py-2.5 bg-blue-200 font-semibold rounded-r-lg text-gray-800 hover:bg-red-200"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              🔍 Search
            </button>
          </div>
          <div className="search">
            <button
              className="px-4 py-2 text-sm text-gray-500 border border-gray-300 rounded-full hover:text-black hover:border-black"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Rating 4.0+
            </button>
          </div>
          {/* <div className="search">
          <label>UserName : </label>
          <input
            type="text"
            className="px-4 py-2 border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant?.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
