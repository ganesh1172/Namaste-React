import React, { Component } from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import heroImg from "../Images/about.png";

// class About extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}
//   render() {
//     return (
//       <div>
//         <h1>About Us</h1>
//         <div>
//           LoggedInUser :-{" "}
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="font-bold text-2xl">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2>This is About section</h2>
//         <UserClass />
//       </div>
//     );
//   }
// }

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="w-6/12">
        <h1 className="text-5xl font-semibold">Welcome to</h1>
        <div className="w-fit text-8xl bg-blue-300 font-semibold text-white rounded-lg px-3 py-1 my-2">
          Foodie Hub
        </div>
        <p className="text-lg font-semibold italic">
          "Delight in Every Dish, Direct to Your Doorstep"
        </p>
      </div>
      <div className="w-6/12">
        <img className="w-fit" src={heroImg} alt="About Image" />
      </div>
    </div>
  );
};

export default About;
