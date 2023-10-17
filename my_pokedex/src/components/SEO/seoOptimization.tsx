import { Head } from "next/document"
import { ReactNode } from "react"

interface SeoProps{
    title: string,
    description: string,
    children: ReactNode
}

const SeoOptimization = ({title, description, children} : SeoProps) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>   

            {children} 
        
        </>
    )
}

export default SeoOptimization