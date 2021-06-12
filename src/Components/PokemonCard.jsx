import React from "react";


const PokemonCard = ({spriteSpecieAndName}) => {
    console.log(spriteSpecieAndName);

    return(
        <>
            <div id="card-wrapper" className="cardwrapper">
                <h5 className="allignmentspecie">Nombre: {spriteSpecieAndName.specie}</h5>
                <div className="allignmentsprite"><img src={spriteSpecieAndName.sprite} alt={spriteSpecieAndName.name} /></div>
                <h5 className="allignmentname">Estilo: {spriteSpecieAndName.name}</h5>
            </div>
        </>
    )
};

export default PokemonCard;