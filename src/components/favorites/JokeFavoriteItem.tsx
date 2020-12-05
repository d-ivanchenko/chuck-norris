import React from "react";
import { Joke } from "../../store/joke/types";

type Props = {
  joke: Joke;
  removeFavorite(joke: Joke): void;
};

const JokeFavoriteItem = ({ joke, removeFavorite }: Props) => {
  return (
    <div className="favorites-list-item" onClick={() => removeFavorite(joke)}>
      {joke.value}
    </div>
  );
};

export default JokeFavoriteItem;
