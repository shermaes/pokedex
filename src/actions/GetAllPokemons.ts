let i =1;
async function gettingAllPokemons()
{
     let j = 51
        for(i; i<j; i++){
            await getAllPokemons();
            console.log(i);
        }
}
const getAllPokemons = async () =>{
     let getRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        let data = await getRequest.json()
        console.log(data.name);
        console.log(data.types.map(item => item.type.name));
        console.log(data.sprites.front_default);
        
        
        return data.name  
    }

export default gettingAllPokemons