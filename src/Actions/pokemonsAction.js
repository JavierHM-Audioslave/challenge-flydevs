import { POKEMONS } from "../Constants/actions";


export const willSetPokemons = () => {
    return {
        type: POKEMONS.WILL_SET_POKEMONS,
    };
};

export const setPokemons = pokemons => {
    return {
        type: POKEMONS.SET_POKEMONS,
        pokemons: pokemons
    };
};

export const cleanStore = () => {
    return {
        type: POKEMONS.CLEAN,
    };
};