import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ListOfPokemons from "./ListOfPokemons";


const Home = () => {

    const [spriteSpecieAndName, setSpriteSpecieAndName] = useState();
    // console.log(spriteSpecieAndName);


    return(
        <>
            <Header/>
            <main>
                <Search
                    setSpriteSpecieAndName={setSpriteSpecieAndName}
                />
                {spriteSpecieAndName && <ListOfPokemons
                    spriteSpecieAndName={spriteSpecieAndName} // El problema es que este estado tiene promesas y, para renderizar, esto no se puede. Por lo tanto, hay que solucionar esto como está en "https://forum.freecodecamp.org/t/react-js-error-objects-are-not-valid-as-a-react-child/387153".
                />}
            </main>
            
        </>
    );
}


export default Home;