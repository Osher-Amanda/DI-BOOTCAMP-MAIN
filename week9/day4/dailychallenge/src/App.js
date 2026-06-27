import React from "react";

import AgeDisplay from "./components/AgeDisplay";
import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Age Tracker</h1>

      <AgeDisplay />

      <AgeControls />
    </div>
  );
}

export default App;