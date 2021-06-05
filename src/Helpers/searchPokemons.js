import axios from "axios";



const searchPokemons = async e => {
    e.preventDefault();
    const typeEntederByUser = document.getElementById("iptSearch");
    console.log(typeEntederByUser.value);

    try {
        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");
        console.log(pokemons);
    } catch(error) {
        console.error(error);
    }
}


export default searchPokemons;