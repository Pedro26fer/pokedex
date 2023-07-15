import { ReactNode } from "react"
import { getPokemons } from "@/assets/indext"

interface PropsChilldren {
    children: ReactNode
}

interface HandleSet{
    next: string
    previous: string
    setPokemonList: (value: []) => void
    setNextPage: (value: string) => void
    setPreviousPaget: (value: string) => void
    }


export const ButtonPage = ({ children, next, previous, setPokemonList, setNextPage, setPreviousPaget }: PropsChilldren & HandleSet) => {

    const handleClick = async () => {
        if(children === "Próxima" && next !== null){
            getPokemons(next,setPokemonList,setNextPage,setPreviousPaget)
        }
        else if(children === "Anterior" && previous !== null){
            getPokemons(previous,setPokemonList,setNextPage,setPreviousPaget)
        }
    }

    return(
        <button
        className={` font-mono  text-red-500 bg-white p-1 rounded-md hover:shadow-lg`}
        onClick={() => handleClick()}
        
        >
            {children}
        </button>
    )
}