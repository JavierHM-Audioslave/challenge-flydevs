import Axios from "axios";



export const searchAllPokemons = async () => {

    try {
        const pokemons = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");
        console.log(pokemons);
        return pokemons;
    } catch(error) {
        console.error(error);
    }
};


export const searchPokemonsByInsertion = async (e, pokemons) => {

    e.preventDefault();
    const typeEnteredByUser = document.getElementById("iptSearch");
    const userType = typeEnteredByUser.value;
    const regexToLookFor = `${userType}*`;
    const pokemonsComplyingUserInsertion = pokemons.filter( element => {
        const regex = new RegExp(regexToLookFor);
        if( regex.test(element.name) ) {
            return true;
        }
        return false;
    });

    const listOfGeneralInfo = [];
    pokemonsComplyingUserInsertion.forEach( element => {
        listOfGeneralInfo.push(element.url);
    });

    const urlsToForms = [];
    const promises1 = listOfGeneralInfo.map( async element => {
        try{
            const hola = await Axios.get(element);
            if( hola.status === 200 ) {
                urlsToForms.push(hola.data);   // urlsToForms es https://pokeapi.co/api/v2/pokemon/25/ el cual contiene las forms (que contiene las imágenes) y las abilities. //

                let urlFrontDefault = [];

                const promises2 = urlsToForms.map( async element => {
                    const urlToImages = element.forms[0].url;
                    const returnOfService = await Axios.get(urlToImages);
                    if( returnOfService.status === 200 ) {
                        const urlFrontAux = returnOfService.data.sprites.front_default;
                        urlFrontDefault.push(urlFrontAux);
                        return urlFrontAux;
                    };
                });
                const sprites = await Promise.all(promises2);
                console.log(sprites);
                return sprites;

            };
        } catch(error) {
            console.error(error);
            return;
        }

    });

    const urls = await Promise.all(promises1);
    console.log(urls);
};