let i =1;
async function gettingAllPokemons()
{
     let j = 51
     const arreglo = []
        for(i; i<j; i++){
            const data = await getAllPokemons();
                const aPokemon=  { 
                name_pokemon: data.name,
                URL: data.sprites.front_default,
                type:data.types.map(item => item.type.name)
            }
            arreglo.push(aPokemon) 
        }
        return arreglo
}
const getAllPokemons = async () =>{
     let getRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        let data = await getRequest.json()
        //console.log(data.name);
        // console.log(data.types.map(item => item.type.name));
        //console.log(data.sprites.front_default);
        console.log(data);
        
        return data  
    }

export default gettingAllPokemons