import React, { Component, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { Joke } from "../store/joke/types";
import { RootState } from "../store";
import { thunkGetJoke } from "../store/joke/thunks";
import { addFavorite } from "../store/favorites/actions";
import Button from "./Button";

const mapState = (state: RootState) => ({
  joke: state.joke.joke,
});

const mapDispatch = (dispatch: any) => ({
  getRandomJoke: () => dispatch(thunkGetJoke()),
  addFavoriteJoke: (joke: Joke) => dispatch(addFavorite(joke)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type State = {
  jokeStreaming: boolean;
};

class JokeItem extends Component<PropsFromRedux, State> {
  constructor(props: PropsFromRedux) {
    super(props);
    this.state = {
      jokeStreaming: false,
    };
  }
  async componentDidMount() {
    if (!this.props.joke) {
      this.props.getRandomJoke();
    }
  }

  getRandomJokeByInterval = async () => {
    if (this.state.jokeStreaming) {
      this.setState({ jokeStreaming: false });
    } else {
      await this.props.getRandomJoke();
      this.setState({ jokeStreaming: true });
    }
  };

  render() {
    return (
      <div className="joke">
        <div>{this.props.joke}</div>

        <div className="btn">
          <Button
            title={
              !this.state.jokeStreaming ? "Get joke every 3 seconds" : "Stop"
            }
            onClick={this.getRandomJokeByInterval}
          />
          <Button title="Get joke" onClick={this.props.getRandomJoke} />
          {this.props.joke && (
            <Button
              title="Favorite"
              onClick={() => this.props.addFavoriteJoke(this.props.joke)}
            />
          )}
          <Button
            title="Favorite List"
            onClick={() => console.log("show favorite list")}
          />
        </div>
      </div>
    );
  }
}

// const JokeItem = ({ joke, addFavoriteJoke, getRandomJoke }: PropsFromRedux) => {
//   const [streamJoke, setStreamJoke] = useState(false);
//
//   useEffect(() => {
//     if (!streamJoke) return;
//     const intervalId = setInterval(async () => {
//       try {
//         await getRandomJoke();
//       } catch (err) {
//         console.error(err);
//       }
//     }, 3000);
//
//     return () => clearInterval(intervalId);
//   });
//
//   const getRandomJokeByInterval = async () => {
//     if (streamJoke) {
//       setStreamJoke(false);
//     } else {
//       await getRandomJoke();
//       setStreamJoke(true);
//     }
//   };
//
//   return (
//     <div className="joke">
//       <div>{joke ? joke.value : "..."}</div>
//
//       <div className="btn">
//         <Button
//           title={!streamJoke ? "Get joke every 3 seconds" : "stop"}
//           onClick={() => getRandomJokeByInterval()}
//         />
//         <Button title="Get joke" onClick={getRandomJoke} />
//         {data !== null && (
//           <Button title="Favorite" onClick={() => addFavoriteJoke(data)} />
//         )}
//         <Button
//           title="Favorite List"
//           onClick={() => console.log("show favorite list")}
//         />
//       </div>
//     </div>
//   );
// };
//
// export default JokeItem;
