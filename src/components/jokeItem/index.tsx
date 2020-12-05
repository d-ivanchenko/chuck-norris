import React, { useState } from "react";

import Button from "../shared/Button";

import { PropsFromRedux } from "./cnt";

const JokeItem = ({
  joke,
  getRandomJoke,
  addToFavoriteList,
}: PropsFromRedux) => {
  const [stream, setStream] = useState(false);

  const getRandomJokeByInterval = async () => {
    if (stream) {
      setStream(false);
    } else {
      await getRandomJoke();
      setStream(true);
    }
  };

  return (
    <div className="joke-container">
      <div className="joke-text">{joke || "..."}</div>

      <div className="joke-controls">
        <Button
          title={!stream ? "Start" : "Stop"}
          onClick={getRandomJokeByInterval}
        />
        <Button title="Get joke" onClick={getRandomJoke} />
        {joke && (
          <Button title="Favorite" onClick={() => addToFavoriteList(joke)} />
        )}
        <Button
          title="Favorite List"
          onClick={() => console.log("show favorite list")}
        />
      </div>
    </div>
  );
};

export default JokeItem;
