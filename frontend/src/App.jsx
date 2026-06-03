import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;

  return (
    <>
      <MovieCard movie={{title: "Movie1", release_date: "2026"}}/>
      <MovieCard movie={{title: "Movie2", release_date: "2024"}}/>

    </>
  );
}

export default App
