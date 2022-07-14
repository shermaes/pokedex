
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import PrivateRoutes from './routes/PrivateRoute'


function App() {
 // gettingAllPokemons()
  //const pokemon = useSelector((state: stateType)=> state.pokemonList)
  
  return (
    <div className='app-container'>
      <Header/>
      <BrowserRouter>
      <PrivateRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
