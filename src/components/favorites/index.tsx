import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store";
import { Joke } from "../../store/joke/types";
import { clearFavorites, removeFavorite } from "../../store/favorites/actions";
import JokeFavoriteItem from "./JokeFavoriteItem";
import Button from "../shared/Button";

const mapState = (state: RootState) => ({
  favorites: state.favorites,
});

const mapDispatch = (dispatch: any) => ({
  removeFavoriteJoke: (joke: Joke) => dispatch(removeFavorite(joke)),
  clearFavoriteJokes: () => dispatch(clearFavorites()),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Favorites = ({
  favorites,
  removeFavoriteJoke,
  clearFavoriteJokes,
}: PropsFromRedux) => {
  const jokes = favorites.map((joke) => (
    <JokeFavoriteItem
      key={joke.id}
      joke={joke}
      removeJoke={removeFavoriteJoke}
    />
  ));

  if (!favorites.length) return null;

  return (
    <div className="container">
      <h3>Favorites</h3>
      <div className="favorite-list">{jokes}</div>
      <div className="favorite-controls">
        <Button title="Clear" onClick={clearFavoriteJokes} />
      </div>
    </div>
  );
};

export default connector(Favorites);
