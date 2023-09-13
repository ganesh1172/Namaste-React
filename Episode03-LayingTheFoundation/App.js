import React from "react";
import ReactDOM from "react-dom/client";

//JSX Element
const jsxHeading = <h1 id="heading">Hello World from JSX</h1>;

const Title = () => <h1>Namaste React using JSX</h1>;

//React Component
const HeadingComponent = () => (
  <div className="container">
    <Title />
    {jsxHeading}
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
