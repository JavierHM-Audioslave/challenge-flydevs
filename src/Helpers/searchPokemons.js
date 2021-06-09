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


export const searchPokemonsByInsertion = async pokemons => {   // ACLARACIÓN: esta función es llamada por la función "searchImagesOfPokemons" (la que está abajo de todo en este archivo) y su objetivo es obtener las urls de las imágenes para cada pokemon que cumpla con el/los pokemones que el usuario haya escrito en el input. //

    const typeEnteredByUser = document.getElementById("iptSearch");
    const userType = typeEnteredByUser.value;
    const regexToLookFor = `^${userType}.*`;
    const pokemonsComplyingUserInsertion = pokemons.filter( element => {
        const regex = new RegExp(regexToLookFor,"i");
        if( regex.test(element.name) ) {
            console.log(regex);
            console.log(element.name);
            console.log(element);
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
                const generalInfo = hola.data   // generalInfo es https://pokeapi.co/api/v2/pokemon/25/ el cual contiene los sprites (que contiene las urls de las imágenes). //

                console.log(generalInfo);
                const spriteSpecieAndNamePhoto = {
                    sprite: generalInfo.sprites.front_default,
                    specie: generalInfo.species.name,
                    name: generalInfo.name
                }
                console.log(spriteSpecieAndNamePhoto);
                return spriteSpecieAndNamePhoto;
            } else {
                console.error(`Se produjo un error al buscar la url que da acceso a la url que contiene las imágenes de los Pokemones. Dicha url es ${element}`)
            }
        } catch(error) {
            console.error(`Error del lado del servidor. A continuación, el detalle: ${error}`);        }

    });

    return await Promise.all(promises1);    // ACLARACIÓN: con este "Promise.all" lo que hago es retrasar la ejecución de esta línea (que es el return) hasta que todas las promesas que se están ejecutando en el map estén terminadas. De lo contrario, apenas se llega a la línea del map se pasa a esta sin esperar que se terminen siquiera de procesar todos los elementos del array que itera el map. //
};


export const searchImagesOfPokemons = async (e, pokemons, setSpriteSpecieAndName) => {  // ACLARACIÓN: esta función es llamada por el evento "onSubmit" del componente "Search.jsx" que se activa cuando el usuario clickea en el botón "Buscar". //
    e.preventDefault();
    const retorno = await searchPokemonsByInsertion(pokemons);
    console.log(retorno);
    setSpriteSpecieAndName(retorno);
};