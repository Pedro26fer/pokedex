import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

interface PokemonItem {
    name: string,
    url: string
}

export const PokerCards = ({name, url} : PokemonItem) => {

    const [urlImage, setUrlImage] = useState<string>('')

    useEffect(() => {
        async () => {
            try {
                const response = await axios.get(url)
                setUrlImage(response.data.sprites.back_default)
                console.log(urlImage)
            } catch (error) {
                console.log(error)
            }
        }
    })

    return(
        <div className={`
        flex flex-col gap-3  justify-center items-center
        `}>
            <Image
                src={urlImage}
                alt={name}
                width={200}
                height={200}            
            />
            <h1>{name}</h1>
            <button>veja mais</button>
        </div>
    )
}