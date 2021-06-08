import React from "react";


const PokemonCard = ({image, index: id}) => {   // NOTA: renombro "index" (que es la variable enviada desde el componente padre) a "id". //
    // console.log(id);

    return(
        <>
            <img src={image} alt="Pokemon" />
        </>
    )
};

export default PokemonCard;