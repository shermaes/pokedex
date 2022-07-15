import { Link, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import PokemonList from "../components/PokemonList";
import PokemonSearcher from "../components/PokemonSearcher";
import pokemonSearcher from "../components/PokemonSearcher";

function PrivateRoutes() {
    return(
    <div >      
    <div className="navigation_bar">
      <a className="button-nav"> 
        <Link to="/pokemonList" style={{ textDecoration: 'none' }} className="link">Pokemon List</Link>
        </a>
        <a className="button-nav">
        <Link to="/pokemonSearch"  style={{ textDecoration: 'none' }} className="link">Pokemon Searcher</Link>
        </a>
        <a className="button-nav">
        <Link to="/login"  style={{ textDecoration: 'none' }} className="link">Login</Link>
        </a>
        <Routes>
          <Route path="/pokemonList" element={<PokemonList/>}></Route> 
          <Route path="/pokemonSearch" element={<PokemonSearcher/>}></Route> 
          <Route path="/login" element={<Login name={""} email={""} password={""}/>}></Route> 
        </Routes>
    </div>
    </div> 
    )
}

export default PrivateRoutes