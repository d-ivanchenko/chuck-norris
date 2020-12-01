import actionTypes from "../actionTypes";
import {Joke} from "../../../../contacts/joke";
import {IActionData} from "../../contracts/IActionData";

export type IAddJoke = IActionData<actionTypes.ADD_JOKE, Joke | null>