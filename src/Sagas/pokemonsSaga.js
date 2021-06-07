import { put, takeEvery, call } from "redux-saga/effects";
import { setPokemons, cleanStore } from "../Actions/pokemonsAction";
import { searchAllPokemons } from "../Helpers/searchPokemons";
import { POKEMONS } from "../Constants/actions";

function *pokemonsHandler() {
    const pokemons = yield call(searchAllPokemons);    // Llamada a la función que consume la API de Pokemon. //
    yield put(cleanStore());
    if( pokemons.status !== 200 ) {
        console.error("La consulta a la API devolvió el código de error " + pokemons.status + ". Intentar haciendo la búsqueda nuevamente o ponerse en contacto con el desarrollador.");
        return;
    }

    if( pokemons.status >= 500 ) {
        throw Error("Error en el servidor. Comunicarse con el desarrollador del frontend y/o el administrador de la API");
    }

    yield put(setPokemons(pokemons.data.results));    
};

export default function *cleanWatcher() {
    yield takeEvery(POKEMONS.WILL_SET_POKEMONS, pokemonsHandler) // NOTA: si la acción WILL_SET_POKEMONS tuviese payload, esta línea podria ser const { poder, vida } = yield take(POKEMONS.WILL_SET_POKEMONS) donde tanto "poder" como "vida" son el payload de la acción mencionada. Y en la siguiente línea, tiene que estar un yield call(pokemonsHandler, poder, vida); para así se llama a la función generadora pokemonsHandler con los dos argumentos "poder" y "vida". //
};