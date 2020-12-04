import React from 'react';
import {Joke} from "../contacts/joke";
import AppState from "../redux/reduces/contracts/AppState";
import {clearFavoriteJokes, removeFavoriteJoke} from "../redux/reduces/favoriteJokes/actions";
import {connect} from "react-redux";
import Button from "./Button";


type FavoriteListItemProps = {
  joke: Joke;
  removeFavoriteJoke(joke: Joke): void;
}

const FavoriteListItem = (props: FavoriteListItemProps) => (
  <div className={'favorites-list-item'} onClick={() => props.removeFavoriteJoke(props.joke)}>
    {props.joke.value}
  </div>
)

type FavoriteListProps = {
  favoriteJokes: Joke[];
  clearFavoriteJokes(): void;
  setShowFavoriteList(value: boolean): void;
  removeFavoriteJoke(joke: Joke): void;
}

const Favorites = (props: FavoriteListProps) => {
  // if (props.favoriteJokes.length === 0)
  const items = props.favoriteJokes.map((joke, i) =>
    <FavoriteListItem joke={joke} key={i} removeFavoriteJoke={props.removeFavoriteJoke} />
  );

  const handleClearFavoriteJokes = () => {
    props.clearFavoriteJokes();
    props.setShowFavoriteList(false);
  }

  return (
    <>
      <h3>Favorites jokes {!items.length && 'empty'}</h3>
      <div className={'favorites-list'}>
        {items}
      </div>

      {!!items.length && <Button title={'clear'} onClick={handleClearFavoriteJokes} />}
      <Button title={'Back'} onClick={() => props.setShowFavoriteList(false)} />
    </>
  );
};

const mapStateToProps = (state: AppState, ownProps: any) => ({
  favoriteJokes: state.favoriteJokes,
  setShowFavoriteList: (value: boolean) => ownProps.setShowFavoriteList(value),
})

const mapDispatchToProps = (dispatch: any) => ({
  removeFavoriteJoke: (joke: Joke) => dispatch(removeFavoriteJoke(joke)),
  clearFavoriteJokes: () => dispatch(clearFavoriteJokes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)