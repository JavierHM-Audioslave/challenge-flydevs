import { render, screen, fireEvent } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import Home from "../Components/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../Reducers";


describe("Home", () => {

    function renderWithProvider (ui, initialState) {
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
    //     const {container} = renderWithProvider( <Home/>, initialState );
    //     // expect(container.querySelector("#columnwrapper")).toBeTruthy();

    //     container.querySelector("#iptSearch").textContent = "bulb";
    //     const button = container.querySelector("#iptSubmitSearch");

    //     fireEvent.click(button);
    //     console.log("HOLAAAAAAAAAAAAAAAa");
    //     console.log(prettyDOM(container));
    //     console.log("CHAUUUUUUUUUUUUUUUUUUUUUUUUU");
    //     expect(container.querySelector("#card-wrapper").firstChild).toBe("Nombre: bulbasaur");
    // });
    // PARA QUE ESTE IT FUNCIONE, TENGO QUE APRENDER A MOCKEAR EL USESTATE DEL COMPONENTE Home. //


});