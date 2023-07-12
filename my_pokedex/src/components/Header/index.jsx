import Image from "next/image"

export const Header = (children) => {

    return(
        <div className={`
        flex gap-5 flex-col
        bg-yellow-400 w-screen justify-center items-center
        p-4 
        
        `}>
           <Image 
                src={"https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"}
                width={400}
                height={300}
                alt="Pokedéx"
            />

        <children/>

        </div>
    )
}


