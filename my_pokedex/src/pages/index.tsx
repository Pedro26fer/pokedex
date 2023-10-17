import Head from "next/head"
import { Dasboard } from "@/components/Dashboard"
import {Header} from "../components/Header"
import { SearchBar } from '@/components/Search'
import {useState } from "react"
import { ButtonPage } from "@/components/ButtonPages"
import AdBanner from "@/components/AdBanner"





export default function Home() {

  const pageOfPokemons: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25" 

  const [pokemon, setPokemon] = useState<string>('')
  const [nextPage, setNextPage] = useState<string>("")
  const [previousPage, setPreviousPage] = useState<string>("")
  const [pokemonList, setPokemonList] = useState<any>([])

  
  return (
    <div style={{overflowX:"hidden", paddingBottom: "20px"}}>
      <Head>
        <title>Pokedéx</title>
        <meta name="description" content="All pokemóns in pokedéx" />
      </Head>    
      <main
        className={`flex min-h-screen flex-col items-center min-w-full gap-3`}
      >
        <Header>
          <ButtonPage next={nextPage} previous={previousPage} setNextPage={setNextPage} setPokemonList={setPokemonList} setPreviousPaget={setPreviousPage}>Anterior</ButtonPage>
          <SearchBar setPokemon={setPokemon}/>
          <ButtonPage next={nextPage} previous={previousPage} setPokemonList={setPokemonList} setNextPage={setNextPage} setPreviousPaget={setPreviousPage}>Próxima</ButtonPage>
        </Header>
        <Dasboard pokemon={pokemon} pageOfPokemons={pageOfPokemons} setNextPage={setNextPage} setPreviousPage={setPreviousPage} pokemonList={pokemonList} setPokemonsList={setPokemonList}/>      
        <AdBanner
               data-ad-slot="6794522996"
               data-ad-format="auto"
               data-full-width-responsive="true"        
        />
      </main>
    </div>
  )
}
