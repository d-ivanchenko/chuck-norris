import {IActionData, IActionNoData} from "../contracts/IActionData";
import actionTypes from "./actionTypes";
import {Joke} from "../../../contacts/joke";
import IAction from "../contracts/Action";
import IAsyncAction from "../contracts/IAsyncAction";
import {getRandomJoke} from "../joke/actions";

export type IAddFavoriteJoke = IActionData<actionTypes.ADD_FAVORITE_JOKE, Joke>
export type IRemoveFavoriteJoke = IActionData<actionTypes.REMOVE_FAVORITE_JOKE, Joke>
export type IClearFavoriteJoke = IActionNoData<actionTypes.CLEAR_FAVORITE_JOKES>

export const addFavoriteJoke: IAsyncAction<[Joke]> = (joke) => async (dispatch, getState) => {
  try {
    dispatch(setFavoriteJoke(joke));
    await dispatch(getRandomJoke());
    const serializedState = JSON.stringify(getState().favoriteJokes);
    localStorage.setItem('favoriteJokes', serializedState);
  } catch (err) {
    console.error(err);
  }
}

const setFavoriteJoke: IAction<IAddFavoriteJoke, [Joke]> = joke => ({
  type: actionTypes.ADD_FAVORITE_JOKE,
  payload: joke,
})

export const removeFavoriteJoke: IAction<IRemoveFavoriteJoke, [Joke]> = joke => ({
  type: actionTypes.REMOVE_FAVORITE_JOKE,
  payload: joke,
})

export const clearFavoriteJokes: IAction<IClearFavoriteJoke> = () => {
  localStorage.removeItem('favoriteJokes');
  return ({
    type: actionTypes.CLEAR_FAVORITE_JOKES
  })
}
