import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store";
import { Joke } from "../../store/joke/types";
import { thunkGetJoke } from "../../store/joke/thunks";
import { addFavorite } from "../../store/favorites/actions";
import Button from "../shared/Button";

const mapState = (state: RootState) => ({
  joke: state.joke,
});

const mapDispatch = (dispatch) => ({
  getRandomJoke: () => dispatch(thunkGetJoke()),
  addToFavoriteList: (joke: Joke) => dispatch(addFavorite(joke)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const JokeItem = ({
  joke,
  getRandomJoke,
  addToFavoriteList,
}: PropsFromRedux) => {
  const [stream, setStream] = useState(false);

  useEffect(() => {
    if (!stream) return;
    const intervalId = setInterval(async () => {
      await getRandomJoke();
    }, 3000);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalId);
  });

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
      <div className="joke-text">{joke ? joke.value : "..."}</div>

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

export default connector(JokeItem);
