import { Link } from "react-router-dom";
import LOGO from "../Images/logo.png";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logReactBtn, setLogReactBtn] = useState("Login");
  // add onlineStatus
  const onlineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="sticky top-0 bg-white shadow-gray-200 shadow-lg">
      <div className="container py-2 mx-auto flex justify-between">
        <div className="logo-container">
          <Link to="/">
            <img
              src={LOGO}
              className="w-[100px] rounded-full"
              alt="Company Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-10 text-lg font-mono font-semibold">
            {/* <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li> */}
            <li>
              <Link to="/">🏠 Home</Link>
            </li>
            <li>
              <Link to="/about">🧑‍💻 About Us</Link>
            </li>
            {/* <li>
            <Link to="/grocery">Grocery</Link>
          </li> */}
            <li>
              <Link to="/contact">📞 Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                {cartItems.length ? `[${cartItems.length}]` : ""}🛒
              </Link>
            </li>
            <button
              className="btn"
              onClick={() =>
                logReactBtn === "Login"
                  ? setLogReactBtn("Logout")
                  : setLogReactBtn("Login")
              }
            >
              💻 {logReactBtn}
            </button>
            {/* <li className="font-bold">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
