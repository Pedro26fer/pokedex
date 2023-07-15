import {useEffect } from "react";
import { PokerCards } from "../PokerCards";
import { getPokemons } from "@/assets/indext";

// interface SearchedPokemon {
//     id: number
//     name:string

// }
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
            flex flex-col items-center justify-center max-w-screen-lg h-4/6
        `}>
            {pokemon.length < 4 ? (
                <ul className={`flex  justify-center items-center flex-row flex-wrap w-full gap-6`}>
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