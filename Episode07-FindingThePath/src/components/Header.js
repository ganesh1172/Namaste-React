import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [logReactBtn, setLogReactBtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} className="Logo" alt="Company Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
