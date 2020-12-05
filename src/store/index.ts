import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import joke from "./joke/reducer";
import favorites from "./favorites/reducer";
import loading from "./loading/reducer";
import initialState from "./initialState";

const rootReducer = combineReducers({
  joke,
  favorites,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
