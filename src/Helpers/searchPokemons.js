import axios from "axios";



const searchAllPokemons = async () => {
    // const typeEntederByUser = document.getElementById("iptSearch");
    // console.log(typeEntederByUser.value);

    try {
        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");
        console.log(pokemons);
        return pokemons;
    } catch(error) {
        console.error(error);
    }
}


export default searchAllPokemons;