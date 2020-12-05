import { JokeState } from "./joke/types";
import { FavoritesState } from "./favorites/types";
import { LoadingState } from "./loading/types";

export type AppState = FavoritesState & LoadingState & JokeState;

const initialState: AppState = {
  joke: null,
  favorites: [],
  loading: false,
};

export default initialState;
