import { ADD_JOKE, JokeActionTypes } from "./types";
import initialState from "../initialState";

const joke = (state = initialState.joke, action: JokeActionTypes) => {
  switch (action.type) {
    case ADD_JOKE:
      return action.payload;
    default:
      return state;
  }
};

export default joke;
