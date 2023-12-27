import {useEffect } from "react";
import { PokerCards } from "../PokerCards";
import { getPokemons } from "@/assets/indext";

interface PageOfPokemons {
    pokemon: string
    pageOfPokemons: string
    setNextPage: (value: string) => void
    setPreviousPage: (value: string) => void
    pokemonList : any[]
    setPokemonsList: (value: []) => void
}

export const Dasboard = ({pageOfPokemons, setNextPage, setPreviousPage, pokemonList, setPokemonsList, pokemon} : PageOfPokemons) => {

    useEffect(() => {getPokemons(pageOfPokemons,setPokemonsList,setNextPage,setPreviousPage)}, [])

    return(
        <div className={`
            flex flex-col w-full h-4/6 justify-center items-center
        `}>
            {pokemon.length < 4 ? (
                <ul className={`flex sm:flex-col lg:justify-center items-center lg:flex-row  flex-wrap w-9/12  gap-14 sm:gap-3 `}>
                    {pokemonList.map((pokemon, index) => (
                        <li key={index}><PokerCards name={pokemon.name} url={pokemon.url}/></li>
                ))}
                </ul>          

            ) 
        :
            (
                <ul className={`flex  justify-center items-center flex-row flex-wrap w-full gap-3`}>
                    <li><PokerCards name={pokemon} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`}/></li>
                </ul>
            )
        
        }

        </div>

    )
}