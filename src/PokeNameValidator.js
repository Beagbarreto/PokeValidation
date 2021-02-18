import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [typedInfo, setTypedInfo] = useState("");
  const [hiddenPokemon, setHiddenPokemon] = useState();

  useEffect(() => {
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    setHiddenPokemon(randomPokemon);
  }, []);

  const handleChange = (e) => {
    setTypedInfo(e.target.value);
    console.log(typedInfo);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name: {hiddenPokemon}
        <strong>{/** random pokemon name should appear here */}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter the Pokémon name"
      />
    </div>
  );
}
