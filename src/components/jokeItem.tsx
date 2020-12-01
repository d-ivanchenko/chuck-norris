import React, {useEffect, useState} from 'react';
import {Joke} from "../contacts/joke";
import styled from "styled-components";
import Button from "./Button";

const StyledJokeItem = styled.div`
  padding: 0.25em 1em;
  background: #fff;
  color: #333;
  margin: 1rem 0;
  border-radius: 5px;
`

type Props = {
  data: Joke | null;
  addFavoriteJoke(joke: Joke): void;
  getRandomJoke(): void;
  setShowFavoriteList(value: boolean): void;
}

const JokeItem = (props: Props) => {
  const [start, setStart] = useState(false);
  const {data, getRandomJoke, addFavoriteJoke, ...styles} = props;

  useEffect(() => {
    if (!start) return;
    const intervalId = setInterval(async () => {
      try {
        await getRandomJoke();
      } catch (err) {
        console.error(err)
      }
    }, 3000);

    return () => clearInterval(intervalId);
  })

  const getRandomJokeByInterval = async () => {
    if (start) {
      setStart(false)
    } else {
      await props.getRandomJoke();
      setStart(true)
    }
  }


  return (
    <div className={'joke'}>
      <h3>Chuck Norries jokes</h3>
      <div {...styles}>
        {data !== null ? data.value : '...'}
      </div>

      <div className={'joke-btn'}>
        <Button title={!start ? 'Get joke every 3 seconds' : 'stop'} onClick={() => getRandomJokeByInterval()}/>
        <Button title={'Get joke'} onClick={getRandomJoke}/>
        {data !== null && <Button title={'Favorite'} onClick={() => addFavoriteJoke(data)}/>}
        <Button title={'Favorite List'} onClick={() => props.setShowFavoriteList(true)}/>
      </div>
    </div>
  );
};

export default (props: Props) => <StyledJokeItem as={JokeItem} {...props} />;