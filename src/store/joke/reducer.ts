import { ADD_JOKE, CLEAR_JOKE, JokeActionTypes, JokeState } from "./types";

const initialState: JokeState = {
  joke: null,
};

const joke = (state = initialState, action: JokeActionTypes): JokeState => {
  switch (action.type) {
    case ADD_JOKE:
      return {
        joke: action.payload,
      };
    case CLEAR_JOKE:
      return {
        joke: null,
      };
    default:
      return state;
  }
};

export default joke;
