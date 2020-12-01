import {Joke} from "../../../contacts/joke";

export default interface AppState {
  joke: Joke | null,
  favoriteJokes: Joke[],
}
