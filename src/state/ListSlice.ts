import { createSlice } from "@reduxjs/toolkit";

type listType = {
    "name_pokemon": string,
    "URL": string,
    "type":string[];  
}

const initialState = [
    {
    name_pokemon:'Bulbasaur',
    URL: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    type:["grass", "poison"]
    }
]

const listSlice = createSlice({
name:'pokemonList',
initialState,
reducers:{
    gettingPokemons(state, action){
        console.log(action.payload);
        
        return action.payload
    }
}

})

export default listSlice.reducer
export const {gettingPokemons}= listSlice.actions
export type {listType}