import AppState from "./reduces/contracts/AppState";

let favoriteJokes;
const serializedState = localStorage.getItem('favoriteJokes');
if (serializedState === null) {
  favoriteJokes = [];
} else {
  favoriteJokes = JSON.parse(serializedState);
}
export const initialState: AppState = {
  joke: null,
  favoriteJokes,
}

