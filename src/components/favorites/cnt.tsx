import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store";
import { Joke } from "../../store/joke/types";
import { clearFavorites, removeFavorite } from "../../store/favorites/actions";
import Favorites from "./index";

const mapState = (state: RootState) => ({
  items: state.favorites,
});

const mapDispatch = (dispatch: any) => ({
  removeFavorite: (joke: Joke) => dispatch(removeFavorite(joke)),
  clearFavorites: () => dispatch(clearFavorites()),
});

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Favorites);
