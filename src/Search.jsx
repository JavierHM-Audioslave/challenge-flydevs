import React from "react";
import { Form, Input } from "reactstrap";


const Search = () => {

    const submitFunction = e => {
        e.preventDefault();
        // dispatch(willSetPokemons());
    };

    return(
        <Form className="mb-5" onSubmit={ e => {submitFunction(e)}}>
            <div id="flexSearch">
                <Input id="iptSearch" className="me-2" type="text" name="iptSearch" placeholder="Ingrese el nombre a buscar" />
                <Input id="iptSubmitSearch" type="submit" value="Buscar" />
            </div>
        </Form>
    );
}


export default Search;