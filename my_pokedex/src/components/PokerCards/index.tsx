import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

interface PokemonItem {
    name: string,
    url: string,
}

export const PokerCards = ({name, url} : PokemonItem) => {

    const [urlImage, setUrlImage] = useState<string>('')

    const imageUrl = async () => {
        try {
            const response = await axios.get(url)
            setUrlImage(response.data.sprites.front_default)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {imageUrl()},[url])
    
    
    return(
        <div className={`
        flex flex-col gap-3  justify-center items-center
        w-80  border border-blue-500 border-6 rounded-md p-3
        font-semibold text-lg
        `}>
            <Image
                className={` border border-yellow-500 border-3 rounded-md`}
                src={urlImage}
                alt={name}
                width={180}
                height={200}            
            />
            <h1>{name}</h1>
            <button className={`text-sm text-red-500`}>veja mais</button>
        </div>
    )
}