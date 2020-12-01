import axios from 'axios';

import {Joke} from "../../../contacts/joke";
import actionTypes from "./actionTypes";
import IAction from "../contracts/Action";
import {IAddJoke} from "./contracts";
import IAsyncAction from "../contracts/IAsyncAction";

const addJoke: IAction<IAddJoke, [Joke]> = joke => ({
  type: actionTypes.ADD_JOKE,
  payload: joke
})

export const getRandomJoke: IAsyncAction<[]> = () => async dispatch => {
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    dispatch(addJoke(data));
  } catch (err) {
    console.error(err);
  }
}