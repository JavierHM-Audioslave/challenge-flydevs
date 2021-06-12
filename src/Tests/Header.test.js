import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";



describe("Header", () => {

    it("renders Header component without crashing", () => {
        render( <Header /> );
        expect(screen).toMatchSnapshot();
    });

    it("element with pokemonheader id has titlewrapper class", () => {
        const {container} = render( < Header /> );
        expect(container.querySelector("#pokemonheader")).toHaveClass('titlewrapper');
    });
});