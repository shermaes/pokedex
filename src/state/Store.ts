import { configureStore } from "@reduxjs/toolkit";
import ListReducer, { listType } from "./ListSlice";

const store = configureStore(
    {
        reducer:{
            pokemonList: ListReducer
        }
    }
)

type store = {
    pokemonList: listType[]
}

type stateType = ReturnType<typeof store.getState>

export default store
export type {store}
export type {stateType}