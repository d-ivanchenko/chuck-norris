import React from "react";

import "../styles.css";

import JokeItem from "./JokeItem";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="App">
      <JokeItem />
      <Favorites />
    </div>
  );
};

export default App;
