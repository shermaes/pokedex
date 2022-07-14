import { useState } from 'react'
import gettingAllPokemons from './actions/GetAllPokemons'

import './App.css'

function App() {
  gettingAllPokemons()
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

export default App
