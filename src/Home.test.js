import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers";


describe("Home", () => {

    function renderWithProvider (ui, inistialState) {
        const store = createStore(rootReducer, initialState);
        return render(
            <Provider store={store}>{ui}</Provider>
        );
    };


    const initialState = {
        pokemons: {
            type: "SET_POKEMONS",
            pokemons: [
                {
                    name: "bulbasur",
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                }
            ]
        }
    };





    it("renders Home component without crashing", () => {
        renderWithProvider( <Home/> );
        expect(screen).toMatchSnapshot();
    });

    it("component Header is rendered", () => {
        const {container} = renderWithProvider( <Home/> );
        expect(container.querySelector("#flexSearch")).toBeTruthy();
    });

    // it("due to spriteSpecieAndName state is falsy, the ListOfPokemons component does not render", () => {
    //     const {container} = renderWithProvider( <Home/> );
    //     expect(container.querySelector("#columnwrapper")).toBeTruthy();
    // });
    // PARA QUE ESTE IT FUNCIONE, TENGO QUE APRENDER A MOCKEAR EL USESTATE DEL COMPONENTE Home. //
});