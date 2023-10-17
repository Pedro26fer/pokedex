import Head from "next/head"
import { Dasboard } from "@/components/Dashboard"
import {Header} from "../components/Header"
import { SearchBar } from '@/components/Search'
import {useState } from "react"
import { ButtonPage } from "@/components/ButtonPages"
import { Adsense } from "@ctrl/react-adsense"





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

        <Adsense 
          client={String(process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID)} 
          slot="7598099081"
          style={{ width: 1280, height: 200, backgroundColor: "#ccc", borderRadius: 20, margin: 20 }}
          format=""
        />

        <Dasboard pokemon={pokemon} pageOfPokemons={pageOfPokemons} setNextPage={setNextPage} setPreviousPage={setPreviousPage} pokemonList={pokemonList} setPokemonsList={setPokemonList}/>      
      </main>
    </div>
  )
}
