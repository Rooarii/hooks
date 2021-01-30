import React, { useState, useEffect, Fragment } from "react";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import axios from "axios";
// import Loading from './Loading'
import { LoopCircleLoading} from 'react-loadingg';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(
    {
      name:"",
      sprites:[{front_default:""}]
    }
    );

  console.debug(
    `isLoading is ${isLoading} and pokemon is ${pokemon && pokemon.name}`
  );

  useEffect(() => {
    console.debug("After mount! Let's load data from API...");
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then(response => {
      console.debug("Hurray! We have Pokemon data, let's update our state");
      console.debug("Calling setPokemon...");
      setPokemon(response.data);
      console.debug("Calling setLoading...");
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    console.debug("renders: Loading...");
    return (
      <Fragment>
        {/* <div className="App">Loading...</div>
        <Loading /> */}
        <LoopCircleLoading />
      </Fragment>
    );
  }

  console.debug("Finally!! A wild Pokémon appears :)");

  return (
    <div className="App">
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
    </div>
  );
}
