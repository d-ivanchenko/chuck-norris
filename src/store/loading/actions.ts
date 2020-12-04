import { LoadingActionTypes, SET_LOADING } from "./types";

export const setLoading = (value: boolean): LoadingActionTypes => ({
  type: SET_LOADING,
  payload: value,
});
