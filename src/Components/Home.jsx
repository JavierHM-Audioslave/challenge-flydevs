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
                    spriteSpecieAndName={spriteSpecieAndName}
                />}
            </main>
            
        </>
    );
}


export default Home;