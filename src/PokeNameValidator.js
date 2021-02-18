import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [typedInfo, setTypedInfo] = useState("");
  const [hiddenPokemon, setHiddenPokemon] = useState();

  useEffect(() => {
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    setHiddenPokemon(randomPokemon);
  }, []);

  // useEffect(() => {
  // }, []);

  const isMatch = () => {
    if (typedInfo.toLowerCase() === hiddenPokemon.toLowerCase()) {
      alert("Correct! Play again?");
    } else {
      console.log("Holy Errors Batman! Try again!");
    }
  };

  if (typedInfo.length >= hiddenPokemon.length) {
    isMatch();
  }

  console.log("TYPING", typedInfo);
  console.log("FROM OUTSIDE", hiddenPokemon);

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
        onChange={(e) => setTypedInfo(e.target.value)}
        placeholder="Enter the Pokémon name"
      />
    </div>
  );
}
