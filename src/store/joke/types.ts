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

export type JokeActionTypes = AddJokeAction;
