import { Joke } from "../joke/types";

export interface FavoritesState {
  favorites: Joke[];
}

export const ADD_FAVORITE = "ADD_FAVORITE";
interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: Joke;
}

export const REMOVE_FAVORITE = "REMOVE_FAVORITE_JOKE";
interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: Joke;
}

export const CLEAR_FAVORITES = "CLEAR_FAVORITES";
interface ClearFavoritesAction {
  type: typeof CLEAR_FAVORITES;
}

export type FavoritesActionTypes =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | ClearFavoritesAction;
