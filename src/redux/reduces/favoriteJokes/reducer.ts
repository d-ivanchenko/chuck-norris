import actionTypes from "./actionTypes";
import {Joke} from "../../../contacts/joke";
import ReducerFunction from "../contracts/ReducerFunction";

import {AddFavoriteJoke, ClearFavoriteJoke, RemoveFavoriteJoke} from "./contracts";
import {initialState as is} from "../../initialState";

const favoriteJokes: ReducerFunction<
  Joke[],
  AddFavoriteJoke | RemoveFavoriteJoke | ClearFavoriteJoke
> = (state = is.favoriteJokes, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_FAVORITE_JOKE:
      if (state.length >= 10) {
        return [...state.slice(1), payload];
      }
      return [...state, payload];
    case actionTypes.REMOVE_FAVORITE_JOKE:
      return state.filter(joke => joke.id !== payload.id);
    case actionTypes.CLEAR_FAVORITE_JOKES:
      return [];
    default:
      return state;
  }
}

export default favoriteJokes;