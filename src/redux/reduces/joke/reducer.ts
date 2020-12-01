import actionTypes from "./actionTypes";
import {Joke} from "../../../contacts/joke";
import ReducerFunction from "../contracts/ReducerFunction";

import {IAddJoke} from "./contracts";
import {initialState as is} from "../../initialState";

const joke: ReducerFunction<Joke | null, IAddJoke> = (state = is.joke, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_JOKE:
      return payload;
    default:
      return state;
  }
}

export default joke;