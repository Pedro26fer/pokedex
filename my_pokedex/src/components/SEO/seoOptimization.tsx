import Head from "next/head"
import { ReactNode } from "react"
import { NextSeo } from "next-seo"

interface SeoProps{
    title: string,
    description: string,
    path: string
    children: ReactNode
}

const SeoOptimization = ({title, description, path, children} : SeoProps) => {
    const url = `https://pokedex-ecru-kappa.vercel.app${path}`
    return(
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title
                }}            
            /> 

            {children} 
        
        </>
    )
}

export default SeoOptimization