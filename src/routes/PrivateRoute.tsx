import { Link, Route, Routes } from "react-router-dom";
import PokemonList from "../components/PokemonList";

function PrivateRoutes() {
    return(
    <div >      
    <div>
        <Link to="/pokemonList">Pokemon List</Link>
        <Routes>
          <Route path="/pokemonList" element={<PokemonList/>}></Route> 
        </Routes>
    </div>
    </div> 
    )
}

export default PrivateRoutes