import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logReactBtn, setLogReactBtn] = useState("Login");
  // add onlineStatus
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-56" alt="Company Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-6">
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() =>
              logReactBtn === "Login"
                ? setLogReactBtn("Logout")
                : setLogReactBtn("Login")
            }
          >
            {logReactBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
