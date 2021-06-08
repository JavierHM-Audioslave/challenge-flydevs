import React from "react";
import PokemonCard from "./PokemonCard";



const ListOfPokemons = ({listOfImages}) => {
    // console.log(listOfImages);

    return(
        <>
            <h4>Resultados de la búsqueda</h4>
            {listOfImages.map( (image, index) => <PokemonCard image={image} index={index}/>)}
        </>
    );
}


export default ListOfPokemons;