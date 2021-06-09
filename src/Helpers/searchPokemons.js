import Axios from "axios";



export const searchAllPokemons = async () => {  // ACLARACIÓN: esta función es llamada por la saga que escucha a la acción "WILL_SET_POKEMONS" //

    try {
        const pokemons = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");
        // console.log(pokemons);
        return pokemons;
    } catch(error) {
        console.error(error);
    }
};


export const searchPokemonsByInsertion = async (e, pokemons) => {   // ACLARACIÓN: esta función es llamada por la función "searchImagesOfPokemons" (la que está abajo de todo en este archivo) y su objetivo es obtener las urls de las imágenes para cada pokemon que cumpla con el/los pokemones que el usuario haya escrito en el input. //

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

    const promises1 = listOfGeneralInfo.map( async element => {
        try{
            const hola = await Axios.get(element);
            if( hola.status === 200 ) {
                const urlsToSprites = hola.data   // urlsTosprites es https://pokeapi.co/api/v2/pokemon/25/ el cual contiene los sprites (que contiene las urls de las imágenes). //

                console.log(urlsToSprites);
                const spriteAndNamePhoto = {
                    sprite: urlsToSprites.sprites.front_default,
                    name: urlsToSprites.name
                }
                // console.log(urls);
                console.log(spriteAndNamePhoto);
                // return urls;
                return spriteAndNamePhoto;
            } else {
                console.error(`Se produjo un error al buscar la url que da acceso a la url que contiene las imágenes de los Pokemones`)
            }
        } catch(error) {
            console.error(`Error del lado del servidor. A continuación, el detalle: ${error}`);        }

    });

    return await Promise.all(promises1);    // ACLARACIÓN: coneste "Promise.all" lo que hago es retrasar la ejecución de esta línea (que es el return) hasta que todas las promesas que se están ejecutando en el map estén terminadas. De lo contrario, apenas se llega a la línea del map se pasa a esta sin esperar que se terminen siquiera de procesar todos los elementos del array que itera el map. //
};


export const searchImagesOfPokemons = async (e, pokemons, setSpriteAndName) => {  // ACLARACIÓN: esta función es llamada por el evento "onSubmit" del componente "Search.jsx" que se activa cuando el usuario clickea en el botón "Buscar". //
    const retorno = await searchPokemonsByInsertion(e, pokemons);
    console.log(retorno);
    setSpriteAndName(retorno);
}