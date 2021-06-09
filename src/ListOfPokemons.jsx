import React from "react";
import PokemonCard from "./PokemonCard";



const ListOfPokemons = ({spriteAndName}) => {
    console.log(spriteAndName);

    return(
        <>
            <h4>Resultados de la búsqueda</h4>
            {spriteAndName.map( (spriteAndName, index) => <PokemonCard spriteAndName={spriteAndName} index={index}/>)}
        </>
    );
}


export default ListOfPokemons;