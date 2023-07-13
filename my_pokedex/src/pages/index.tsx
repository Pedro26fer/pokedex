import { Dasboard } from "@/components/Dashboard"
import {Header} from "../components/Header"
import { SearchBar } from '@/components/Search'
import { useEffect, useState } from "react"



export default function Home() {

  const [pokemon, setPokemon] = useState<string>('')

  
  return (
    <main
      className={`flex min-h-screen flex-col items-center`}
    >
      <Header>
        <SearchBar pokemon={pokemon} setPokemon={setPokemon}/>
      </Header>
      <Dasboard/>      
   
   </main>
  )
}
