import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { LoopCircleLoading} from 'react-loadingg';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({name:"",sprites:{}});

  console.debug(
    `isLoading is ${isLoading} and pokemon is ${pokemon && pokemon.name}`
  );

  useEffect(() => {
    console.debug("After mount! Let's load data from API...");
    axios.get("https://pokeapi.co/api/v2/pokemon/9").then(response => {
      const { name, sprites } = response.data;
      setPokemon({name, sprites});
      setLoading(false);
    });
  }, []);

  console.log(pokemon)

  if (isLoading) {
    return (
      <Fragment>
        <LoopCircleLoading />
      </Fragment>
    );
  }

  return (
    <div className="App">
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
    </div>
  );
}
