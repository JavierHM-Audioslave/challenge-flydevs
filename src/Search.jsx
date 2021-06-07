import React from "react";
import { Form, Input } from "reactstrap";
import { searchPokemonsByInsertion } from "./Helpers/searchPokemons"
import { useSelector } from "react-redux";
import { getPokemons } from "./Selectors"


const Search = () => {

    const pokemons = useSelector(getPokemons);

    return(
        <Form className="mb-5" onSubmit={ async e => {console.log(await searchPokemonsByInsertion(e, pokemons))}}>
            <div id="flexSearch">
                <Input id="iptSearch" className="me-2" type="text" name="iptSearch" placeholder="Ingrese el nombre a buscar" />
                <Input id="iptSubmitSearch" type="submit" value="Buscar" />
            </div>
        </Form>
    );
}


export default Search;