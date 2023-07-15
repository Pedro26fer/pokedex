import { imageUrl } from "@/assets/indext"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

interface PokemonItem {
    name: string,
    url: string,
}

export const PokerCards = ({name, url} : PokemonItem) => {

    const [urlImage, setUrlImage] = useState<string>('')
    const router = useRouter()

    const  moreDetails = (name: string) => {
        router.push(`/pokemons/${name}`)
    }
  

    useEffect(() => {imageUrl({url, setUrlImage})},[url])
    
    
    return(
        <div className={`
        flex flex-col gap-3  justify-center items-center
        w-80  border border-blue-500 border-6 rounded-md p-3
        font-semibold text-lg
        `}>
            <Image
                className={`border border-yellow-500 border-3 rounded-md`}
                src={urlImage}
                alt="Pokemon não encontrado"
                width={180}
                height={200}            
            />
            <h1>{name}</h1>
            <button className={`text-sm text-red-500 hover:shadow-md hover:text-red-700`} onClick={() => moreDetails(name)}>veja mais</button>
        </div>
    )
}