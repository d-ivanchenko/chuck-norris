import { ADD_JOKE, Joke, JokeActionTypes } from "./types";

export const addJoke = (joke: Joke): JokeActionTypes => ({
  type: ADD_JOKE,
  payload: joke,
});
