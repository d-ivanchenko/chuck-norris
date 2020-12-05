import {
  ADD_FAVORITE,
  CLEAR_FAVORITES,
  FavoritesActionTypes,
  REMOVE_FAVORITE,
} from "./types";
import initialState from "../initialState";
import { Joke } from "../joke/types";

const favorites = (
  state = initialState.favorites,
  action: FavoritesActionTypes
): Joke[] => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.length >= 10) {
        return [...state.slice(1), action.payload];
      }
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((joke) => joke.id !== action.payload.id);
    case CLEAR_FAVORITES:
      return [];
    default:
      return state;
  }
};

export default favorites;
