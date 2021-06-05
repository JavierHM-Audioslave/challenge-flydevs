import React from "react";
import { Form, Input } from "reactstrap";
import searchPokemons from "./Helpers/searchPokemons";


const Search = () => {


    return(
        <Form className="mb-5" onSubmit={ e => {searchPokemons(e)}}>
            <div id="flexSearch">
                <Input id="iptSearch" className="me-2" type="text" name="iptSearch" placeholder="Ingrese el nombre a buscar" />
                <Input id="iptSubmitSearch" type="submit" value="Buscar" />
            </div>
        </Form>
    );
}


export default Search;