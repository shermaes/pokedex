import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gettingAllPokemons from '../actions/GetAllPokemons'
import getPokemons from '../actions/GetAllPokemons'
import { gettingPokemons } from '../state/ListSlice'
import store from '../state/Store'

const PokemonList = () => {

    const dispatch = useDispatch()

    const pokemonSavedInStore = useSelector((state:store) => state.pokemonList)
    
   
        

    return (
        <div>
            <h2>Showing 50 pokemons</h2>
            <ul>
                {pokemonSavedInStore.map((pokemon)=>
                <td></td>
                
                
                
                )}
            </ul>
        </div>
        
      )
    }