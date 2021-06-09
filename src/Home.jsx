import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ListOfPokemons from "./ListOfPokemons";


const Home = () => {

    const [spriteAndName, setSpriteAndName] = useState();
    // console.log(spriteAndName);


    return(
        <>
            <Header/>
            <main>
                <Search
                    setSpriteAndName={setSpriteAndName}
                />
                {spriteAndName && <ListOfPokemons
                    spriteAndName={spriteAndName} // El problema es que este estado tiene promesas y, para renderizar, esto no se puede. Por lo tanto, hay que solucionar esto como está en "https://forum.freecodecamp.org/t/react-js-error-objects-are-not-valid-as-a-react-child/387153".
                />}
            </main>
            
        </>
    );
}


export default Home;