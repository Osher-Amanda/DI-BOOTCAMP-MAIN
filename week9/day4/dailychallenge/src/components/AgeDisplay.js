import React from "react";
import { useSelector } from "react-redux";

function AgeDisplay() {
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h1>Age: {age}</h1>

      {loading && <h2>Loading...</h2>}
    </div>
  );
}

export default AgeDisplay;