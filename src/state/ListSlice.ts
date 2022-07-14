import { createSlice } from "@reduxjs/toolkit";

type listType = {
    "name_pokemon": string,
    "URL": string,
    
}

const initialState = [
    {
    name_pokemon:'Bulbasaur',
    URL: 'https://pokeapi.co/api/v2/pokemon-form/1/'
    }
]

const listSlice = createSlice({
name:'pokemonList',
initialState,
reducers:{
    gettingPokemons(state, action){
        return action.payload
    }
}

})

export default listSlice.reducer
export const {gettingPokemons}= listSlice.actions
export type {listType}