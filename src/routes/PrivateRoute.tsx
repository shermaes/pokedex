import { Link, Route, Routes } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonSearcher from "../components/PokemonSearcher";
import pokemonSearcher from "../components/PokemonSearcher";

function PrivateRoutes() {
    return(
    <div >      
    <div className="navigation_bar">
        <Link to="/pokemonList" style={{ textDecoration: 'none' }} className="link">Pokemon List</Link>
        <Link to="/pokemonSearch"  style={{ textDecoration: 'none' }} className="link">Pokemon Searcher</Link>
        <Routes>
          <Route path="/pokemonList" element={<PokemonList/>}></Route> 
          <Route path="/pokemonSearch" element={<PokemonSearcher/>}></Route> 
        </Routes>
    </div>
    </div> 
    )
}

export default PrivateRoutes