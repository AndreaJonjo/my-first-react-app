import React from "react";
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <main className="container">
      <Title content="Some Simple Title" />
      <LikeCounter />
      <div className="row">
        {all_pokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-3">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
            <LikeButton />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
