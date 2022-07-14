import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gettingAllPokemons from '../actions/GetAllPokemons'
import { gettingPokemons } from '../state/ListSlice'
import store from '../state/Store'

const PokemonList = () => {

    const dispatch = useDispatch()

     useEffect(()=>{
        gettingAllPokemons().then(
            (pokemon)=>{
                console.log(pokemon);
                
                dispatch(gettingPokemons(pokemon))
            }
        )
        },[])

    const pokemonSavedInStore = useSelector((state:store) => state.pokemonList)
        
        console.log(pokemonSavedInStore);
        

    return (
        <div>
            <ul>
                {pokemonSavedInStore.map((pokemon)=>
                <tr>
                    <td>Name: {pokemon.name_pokemon}</td>
                    <td>Type: {pokemon.type}</td>
                    
                </tr>
                )}
            </ul>
        </div>
        
      )
    }

    export default PokemonList