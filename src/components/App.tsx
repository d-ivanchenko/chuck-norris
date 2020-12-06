import React from "react";

import "../styles.css";

import JokeItem from "./jokeItem";
import Favorites from "./favorites";

const App = () => {
  return (
    <div className="App">
      <h1>Chuck Norris jokes</h1>
      <JokeItem />
      <Favorites />
    </div>
  );
};

export default App;
