export interface LoadingState {
  loading: boolean;
}

export const SET_LOADING = "SET_LOADING";
interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type LoadingActionTypes = SetLoadingAction;
