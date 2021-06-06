import { handleActions } from "redux-actions";
import { POKEMONS } from "../Constants/actions";

const initialState = "";
const clean = () => { return initialState; };
const setPokemons = (_, pokemons) => {
    return pokemons; 
};

export default handleActions(
    {
        [POKEMONS.CLEAN]: clean,
        [POKEMONS.SET_POKEMONS]: setPokemons
    },
    initialState
);