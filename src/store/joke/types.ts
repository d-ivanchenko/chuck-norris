export interface Joke {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface JokeState {
  joke: Joke | null;
}

export const ADD_JOKE = "ADD_JOKE";
interface AddJokeAction {
  type: typeof ADD_JOKE;
  payload: Joke;
}

export const CLEAR_JOKE = "CLEAR_JOKE";
interface ClearJokeAction {
  type: typeof CLEAR_JOKE;
}

export type JokeActionTypes = AddJokeAction | ClearJokeAction;
