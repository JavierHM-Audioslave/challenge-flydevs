import { render, screen } from "@testing-library/react";
import ListOfPokemons from "./ListOfPokemons";

describe("ListOfPokemons", () => {

    it("renders ListOfPokemons component without crashing", () => {
        render( <ListOfPokemons /> );
        expect(screen).toMatchSnapshot();
    });

    it("due to spriteSpecieAndName variable is fullfiled with one element, PokemonCard component is rendered", () => {
        const spriteSpecieAndName = [
            {
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                specie: "pikachu",
                name: "pikachu"
            }
        ];

        const {container} = render( <ListOfPokemons spriteSpecieAndName={spriteSpecieAndName}/> );
        expect(container.querySelector("#card-wrapper")).toBeTruthy();
    });

    it("due to spriteSpecieAndName variable is fullfiled with one element, PokemonCard component is rendered with two PokemonCard elements", () => {
        const spriteSpecieAndName = [
            {
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                specie: "pikachu",
                name: "pikachu"
            },
            {
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
                specie: "pikachu",
                name: "pikachu-rock-star"
            }
        ];

        const {container} = render( <ListOfPokemons spriteSpecieAndName={spriteSpecieAndName}/> );
        expect(container.querySelectorAll("#card-wrapper")).toHaveLength(2);
    });
});