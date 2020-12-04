import { LoadingActionTypes, LoadingState, SET_LOADING } from "./types";

const initialState: LoadingState = {
  loading: false,
};

const loading = (
  state = initialState,
  action: LoadingActionTypes
): LoadingState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default loading;
