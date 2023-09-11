/**
 * Struture
 *  <div>
 *    <h3></h3>
 *    <div>
 *       <div></div>
 *       <div></div>
 *    </div>
 *    <h3></h3>
 *    <div>
 *       <div></div>
 *       <div></div>
 *    </div>
 *  </div>
 *
 **/

const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h3", {}, "Heading React1"),
  React.createElement(
    "div",
    { id: "sub-heading1" },
    React.createElement("h3", {}, "Hello World from React1"),
    React.createElement("h3", {}, "Hello World from React2")
  ),
  React.createElement("h3", {}, "Heading React2"),
  React.createElement(
    "div",
    { id: "sub-heading2" },
    React.createElement("h3", {}, "Hello World from React1"),
    React.createElement("h3", {}, "Hello World from React2")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
