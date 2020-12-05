import React from "react";

import "../styles.css";

import JokeItem from "./favorites/cnt";
import Favorites from "./favorites/cnt";

const App = () => {
  return (
    <div className="App">
      <JokeItem />
      <Favorites />
    </div>
  );
};

export default App;
