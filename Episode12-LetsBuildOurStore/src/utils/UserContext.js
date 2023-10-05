import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "defautUser",
});

export default UserContext;
