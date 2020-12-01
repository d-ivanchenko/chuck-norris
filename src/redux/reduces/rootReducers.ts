import {combineReducers} from 'redux';

import favoriteJokes from "./favoriteJokes/reducer";
import joke from "./joke/reducer";

export default combineReducers({
  favoriteJokes,
  joke,
})