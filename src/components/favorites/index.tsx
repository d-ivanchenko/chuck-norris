import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store";
import { Joke } from "../../store/joke/types";
import { clearFavorites, removeFavorite } from "../../store/favorites/actions";
import JokeFavoriteItem from "./JokeFavoriteItem";
import Button from "../shared/Button";

const mapState = (state: RootState) => ({
  items: state.favorites,
});

const mapDispatch = (dispatch: any) => ({
  removeFavoriteJoke: (joke: Joke) => dispatch(removeFavorite(joke)),
  clearFavoriteJokes: () => dispatch(clearFavorites()),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Favorites = ({
  items,
  removeFavoriteJoke,
  clearFavoriteJokes,
}: PropsFromRedux) => {
  const jokes = items.map((joke) => (
    <JokeFavoriteItem
      key={joke.id}
      joke={joke}
      removeJoke={removeFavoriteJoke}
    />
  ));

  return (
    <div className="favorite-container">
      <div className="favorite-list">{jokes}</div>
      <div className="favorite-controls">
        {!!items.length && (
          <Button title="clear" onClick={clearFavoriteJokes} />
        )}
      </div>
    </div>
  );
};

export default connector(Favorites);
