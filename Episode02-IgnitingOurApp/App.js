import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h3", {}, "Episode React1"),
  React.createElement(
    "div",
    { id: "sub-heading1" },
    React.createElement("h3", {}, "Chapter React1"),
    React.createElement("h3", {}, "Chapter React2")
  ),
  React.createElement("h3", {}, "Episode React2"),
  React.createElement(
    "div",
    { id: "sub-heading2" },
    React.createElement("h3", {}, "Chapter React1"),
    React.createElement("h3", {}, "Chapter React2")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
