import React, {useState} from "react";
import {connect} from "react-redux";

import "../styles.css";
import AppState from "../redux/reduces/contracts/AppState";
import {Joke} from "../contacts/joke";
import {getRandomJoke} from "../redux/reduces/joke/actions";
import {addFavoriteJoke} from "../redux/reduces/favoriteJokes/actions";
import JokeItem from "./jokeItem";
import FavoriteList from './favoriteList';

type Props = {
  joke: Joke | null,
  favoriteJokes: Joke[],
  addFavoriteJoke(joke: Joke): void;
  getRandomJoke(): void;
}

const App = (props: Props) => {
  const [showFavoriteList, setShowFavoriteList] = useState(false);

  return (
    <div className="App">
      {!showFavoriteList ? (
        <JokeItem
          data={props.joke}
          getRandomJoke={props.getRandomJoke}
          addFavoriteJoke={props.addFavoriteJoke}
          setShowFavoriteList={setShowFavoriteList}
        />
      ) : (
        <FavoriteList setShowFavoriteList={setShowFavoriteList}/>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  joke: state.joke,
  favoriteJokes: state.favoriteJokes,
})

const mapDispatchToProps = (dispatch: any) => ({
  getRandomJoke: () => dispatch(getRandomJoke()),
  addFavoriteJoke: (joke: Joke) => dispatch(addFavoriteJoke(joke)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)