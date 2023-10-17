import Image from "next/image"
import { ReactNode } from "react"

interface ParentComponentProps {
    children: ReactNode
}

export const Header = ({children}: ParentComponentProps) => {

    return(
        <div className={`
        flex gap-3 flex-col
        bg-gradient-to-b from-red-500 to-yellow-500 w-screen h-80 justify-center items-center
        p-5 border-b-4 border-blue-400
        
        `}>
           <Image 
                className={`animate-bounce`}
                src={"https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"}
                width={300}
                height={300}
                alt="Pokedéx"
            />

            <div className={`
                flex flex-row items-end justify-around w-screen 
            `}>
                {children}
            </div>

        </div>
    )
}


{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7287018887736567"
     crossorigin="anonymous"></script> */}