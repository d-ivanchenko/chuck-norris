import { JokeState } from "./joke/types";
import { FavoritesState } from "./favorites/types";

export type AppState = FavoritesState & JokeState;

const initialState: AppState = {
  joke: null,
  favorites: [],
};

export default initialState;
