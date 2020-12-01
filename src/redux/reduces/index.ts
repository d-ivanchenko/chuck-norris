import { combineReducers } from "redux";

import favoriteJokes from "./favoriteJokes/reducer";
import jokes from "./joke/reducer";

export default combineReducers({ jokes, favoriteJokes });
