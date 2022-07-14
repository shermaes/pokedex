import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

function PrivateRoutes() {
    return(
    <div>
        <Navbar/>
        <Link to="/pokemonList">Pokemon List</Link>
        <Routes>
          <Route path="/pokemonList" element={<PokemonList/>}></Route> 
        </Routes>
    </div>
    )
}

export default PrivateRoutes