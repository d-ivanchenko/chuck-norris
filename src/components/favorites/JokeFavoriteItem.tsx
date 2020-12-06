import React from "react";
import { Joke } from "../../store/joke/types";

type Props = {
  joke: Joke;
  removeJoke(joke: Joke): void;
};

const JokeFavoriteItem = ({ joke, removeJoke }: Props) => {
  return (
    <div
      role="presentation"
      className="favorites-list-item"
      onClick={() => removeJoke(joke)}
    >
      {joke.value}
    </div>
  );
};

export default JokeFavoriteItem;
