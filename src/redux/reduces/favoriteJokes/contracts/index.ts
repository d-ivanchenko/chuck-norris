import actionTypes from "../actionTypes";
import {Joke} from "../../../../contacts/joke";
import {IActionData} from "../../contracts/IActionData";

export type AddFavoriteJoke = IActionData<actionTypes.ADD_FAVORITE_JOKE, Joke>
export type RemoveFavoriteJoke = IActionData<actionTypes.REMOVE_FAVORITE_JOKE, Joke>
export type ClearFavoriteJoke = IActionData<actionTypes.CLEAR_FAVORITE_JOKES, Joke>