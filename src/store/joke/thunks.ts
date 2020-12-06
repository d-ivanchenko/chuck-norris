import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { addJoke } from "./actions";
import { RootState } from "../index";
import { Joke } from "./types";

export const thunkGetJoke = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const { data } = await axios.get<Joke>(
      "https://api.chucknorris.io/jokes/random"
    );
    dispatch(addJoke(data));
  } catch (err) {
    // todo добавить обработку ошибок
    console.error(err);
  }
};
