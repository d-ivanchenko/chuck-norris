import {
  ADD_FAVORITE,
  CLEAR_FAVORITES,
  FavoritesActionTypes,
  FavoritesState,
  REMOVE_FAVORITE,
} from "./types";

const initialState: FavoritesState = {
  favorites: [],
};

const favorites = (state = initialState, action: FavoritesActionTypes) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.favorites.length >= 10) {
        return [...state.favorites.slice(1), action.payload];
      }
      return [...state.favorites, action.payload];
    case REMOVE_FAVORITE:
      return state.favorites.filter((joke) => joke.id !== action.payload.id);
    case CLEAR_FAVORITES:
      return [];
    default:
      return state;
  }
};

export default favorites;
