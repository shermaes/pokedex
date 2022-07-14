import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import gettingAllPokemons from './actions/GetAllPokemons'

import './App.css'
import PokemonList from './components/PokemonList'
import PrivateRoutes from './routes/PrivateRoute'
import { stateType } from './state/Store'


function App() {
 // gettingAllPokemons()
  //const pokemon = useSelector((state: stateType)=> state.pokemonList)
  
  return (
    <div>
      <BrowserRouter>
      <PrivateRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
