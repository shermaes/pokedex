import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gettingAllPokemons from '../actions/GetAllPokemons'
import { gettingPokemons } from '../state/ListSlice'
import store from '../state/Store'
import Select from 'react-select'
import axios from 'axios'

const PokemonSearcher = () => {
    const dispatch = useDispatch()
    const[name_pokemon, setPokemon]=useState('')

    const peticionGet = async () =>{
        await axios.get("https://pokeapi.co/api/v2/pokemon/")
         .then(response =>{
             console.log(response.data);
         }).catch(error=>{
             console.log(error);
             
         })
     }
 
     useEffect(()=>{
         peticionGet()
         },[])
         console.log(name_pokemon);
         
    const useForm =(e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setPokemon("")
    }

    const pokemons = useSelector((state:store)=>state.pokemonList)


  return (
    <div>
        <h2>Let's look for a Pokemon</h2>
        <label htmlFor="searchingPokemon">Pokemon:</label>
        <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={name_pokemon}
        //Actualizas el valor del input cuando el usuario teclea
        onChange={e => setPokemon(e.target.value)}
        autoComplete="on"/>
        <input type="submit" className="pokemon-btn" value=""/>
    </div>
  )
}

export default PokemonSearcher