import { all } from "redux-saga/effects";
import cleanWatcher from "./pokemonsSaga";

function *rootSaga() {
    yield all([
        cleanWatcher()
    ]);
};

export default rootSaga;