import {Header} from "../components/Header"
import { SearchBar } from '@/components/Search'
import { useEffect, useState } from "react"



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <Header>
        <SearchBar/>
      </Header>
      
   
   </main>
  )
}
