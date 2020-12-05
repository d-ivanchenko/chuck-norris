import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store";
import { thunkGetJoke } from "../../store/joke/thunks";
import { Joke } from "../../store/joke/types";
import { addFavorite } from "../../store/favorites/actions";

const mapState = (state: RootState) => ({
  joke: state.joke,
});

const mapDispatch = (dispatch: any) => ({
  getRandomJoke: () => dispatch(thunkGetJoke()),
  addToFavoriteList: (joke: Joke) => dispatch(addFavorite(joke)),
});

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;
