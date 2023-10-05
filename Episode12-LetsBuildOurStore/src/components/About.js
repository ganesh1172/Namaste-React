import React, { Component } from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedInUser :-{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-2xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is About section</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
