import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { useGetPokemonByNameQuery } from "./features/api/pokemonApi";
import { CounterApp } from './counter/CounterApp';
import { Navigation } from './navigation/Navigation';
import { Cards } from './cards/Cards';

function App() {
  const { data, isFetching } = useGetPokemonByNameQuery("bulbasaur");
  console.log(isFetching);
  console.log(data);

  return (
    <Routes>
      <Route path="*" element={<Navigation />} />
      <Route path="/counter" element={<CounterApp />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  )
}

export default App;
