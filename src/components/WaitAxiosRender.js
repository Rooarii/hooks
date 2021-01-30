import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Loading from './Loading'
import { LoopCircleLoading} from 'react-loadingg';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  const structure = {
    name:"",
    sprites:{}
  }

  const [pokemon, setPokemon] = useState( Object.create(structure));
  const [pokemon1, setPokemon1] = useState(Object.create(structure));
  

  useEffect(() => {

    const fetchPokemon1 = async () =>{
      try {
        await axios.get("https://pokeapi.co/api/v2/pokemon/1").then(response => {
        const { name, sprites } = response.data;
        setPokemon1({pokemon_1:name, sprites});
        setLoading(false);
        });
      } catch (error) {
        console.log(error.message)
      }
    };
    
    const fetchPokemon = async () =>{
      try {
        await axios.get("https://pokeapi.co/api/v2/pokemon/9").then(response => {
        const { name, sprites } = response.data;
        setPokemon({name, sprites});
        setLoading(false);
    });
      } catch (error) {
        console.log(error.message)
      }
    };
    
   Promise.all([fetchPokemon(), fetchPokemon1()])
    
  //  fetchPokemon();
  //  fetchPokemon1();

  }, []);

  console.log(pokemon)
  console.log(pokemon1)

  if (isLoading) {
    return (
      <Fragment>
        {/* <div className="App">Loading...</div>
        <Loading /> */}
        <LoopCircleLoading />
      </Fragment>
    );
  }

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <h2>{pokemon.name}</h2>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <h2>{pokemon1.pokemon_1}</h2>
      <img alt={pokemon1.pokemon_1} src={pokemon1.sprites.front_default} />
    </div>
  );
}
