import { Joke } from "../joke/types";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  FavoritesActionTypes,
} from "./types";

export const addFavorite = (joke: Joke): FavoritesActionTypes => ({
  type: ADD_FAVORITE,
  payload: joke,
});

export const removeFavorite = (joke: Joke): FavoritesActionTypes => ({
  type: REMOVE_FAVORITE,
  payload: joke,
});

export const clearFavorites = (): FavoritesActionTypes => ({
  type: CLEAR_FAVORITES,
});
