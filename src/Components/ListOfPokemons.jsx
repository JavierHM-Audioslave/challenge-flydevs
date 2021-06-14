import React from "react";
import PokemonCard from "./PokemonCard";



const ListOfPokemons = ({spriteSpecieAndName}) => {
    console.log(spriteSpecieAndName);

    return(
        <>
            <h2>Resultados de la búsqueda</h2>
            <div style={{marginBottom: "100px"}} id="columnwrapper" className="allignment">
                {spriteSpecieAndName && spriteSpecieAndName.map(spriteSpecieAndName => <PokemonCard spriteSpecieAndName={spriteSpecieAndName} />)}
            </div>
        </>
    );
}


export default ListOfPokemons;