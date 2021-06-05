import React from "react";
import Header from "./Header";
import Search from "./Search";
import ListOfPokemons from "./ListOfPokemons";


const Home = () => {


    return(
        <>
            <Header/>
            <main>
                <Search/>
                <ListOfPokemons/>
            </main>
            
        </>
    );
}


export default Home;