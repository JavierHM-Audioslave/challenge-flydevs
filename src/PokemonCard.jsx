import React from "react";


const PokemonCard = ({spriteAndName, index: id}) => {   // NOTA: renombro "index" (que es la variable enviada desde el componente padre) a "id". //
    console.log(spriteAndName);

    return(
        <>
            <br />
            <img src={spriteAndName.sprite} alt={spriteAndName.sprite} />
            <span>{spriteAndName.name}</span>
        </>
    )
};

export default PokemonCard;