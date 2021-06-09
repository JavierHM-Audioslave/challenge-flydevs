import React from "react";
import { Form, Input } from "reactstrap";
import { searchImagesOfPokemons } from "./Helpers/searchPokemons"
import { useSelector } from "react-redux";
import { getPokemons } from "./Selectors"


const Search = ({setSpriteSpecieAndName}) => {

    const pokemons = useSelector(getPokemons);

    return(
        <Form className="mb-5" onSubmit={ e => searchImagesOfPokemons(e, pokemons, setSpriteSpecieAndName) }>
            <div id="flexSearch">
                <Input id="iptSearch" className="me-2" type="text" name="iptSearch" placeholder="Ingrese el nombre a buscar" />
                <Input id="iptSubmitSearch" type="submit" value="Buscar" />
            </div>
        </Form>
    );
}


export default Search;