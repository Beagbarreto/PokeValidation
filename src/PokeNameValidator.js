import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */
  const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name: {randomPokemon};
        <strong>{/** random pokemon name should appear here */}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input type="text" placeholder="Enter the Pokémon name" />
    </div>
  );
}
