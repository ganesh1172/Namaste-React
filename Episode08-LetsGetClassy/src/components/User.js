import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  console.log("in state");
  useEffect(() => {
    console.log("child component useEff");
  }, []);
  console.log("in return");
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h1>count :- {count}</h1>
      <h1>count1 :- {count1}</h1>
      <h2>name : {name}</h2>
      <p>location: {location}</p>
      <p>contact: {contact}</p>
    </div>
  );
};

export default User;
