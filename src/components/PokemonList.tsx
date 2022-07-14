import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gettingAllPokemons from '../actions/GetAllPokemons'
import { gettingPokemons } from '../state/ListSlice'
import store from '../state/Store'
import PokemonThumb from './PokemonThumb'

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
        <div className='pokemon-container'>
            <div className='all-container'>
            
                {pokemonSavedInStore.map((pokemon)=>
                    <PokemonThumb 
                URL={pokemon.URL} 
                name_pokemon={pokemon.name_pokemon}
                type={pokemon.type[0]} _callback={undefined}                
                />
                )}
            
            </div>
        </div>
        
      )
    }

    export default PokemonList