import React from "react";

import Button from "../shared/Button";
import JokeFavoriteItem from "./JokeFavoriteItem";
import { PropsFromRedux } from "./cnt";

const Favorites = ({
  items,
  clearFavorites,
  removeFavorite,
}: PropsFromRedux) => {
  const jokes = items.map((item, index) => (
    <JokeFavoriteItem key={index} joke={item} removeFavorite={removeFavorite} />
  ));

  return (
    <div className="favorite-container">
      <div className="favorite-list">{jokes}</div>
      <div className="favorite-controls">
        {!!items.length && <Button title={"clear"} onClick={clearFavorites} />}
      </div>
    </div>
  );
};

export default Favorites;
