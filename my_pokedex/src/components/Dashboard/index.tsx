import axios from "axios";
import { useState, useEffect } from "react";
import { PokerCards } from "../PokerCards";

export const Dasboard = () => {

    const [pokemonList, setPokemonList] = useState([] as any[])

    useEffect(() => {
        async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=15")
                setPokemonList(response.data.results)
                console.log(pokemonList)
            } catch (error) {
                console.log(error)
            }
        }
    }, [pokemonList, setPokemonList])
    return(
        <div className={`
            flex flex-col items-center justify-center w-screen bg-black h-
        `}>
            <ul className={`flex  justify-center items-centerflex-row flex-wrap gap-2 `}>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}><PokerCards name={pokemon.name} url={pokemon.url}/></li>
                ))}
            </ul>
            

        </div>

    )
}