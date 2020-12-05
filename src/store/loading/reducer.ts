import { LoadingActionTypes, SET_LOADING } from "./types";
import initialState from "../initialState";

const loading = (state = initialState.loading, action: LoadingActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loading;
