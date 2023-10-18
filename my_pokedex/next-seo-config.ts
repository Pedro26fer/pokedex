const title: string = "pokedéx - Get all pokémons" 
const description: string = "Search for any pokemon that you wanna get"


export const SEO = {
    title,
    description,
    canonical: 'https://pokedex-ecru-kappa.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'pt_Br',
        title,
        description,
        images: [
            {
                url: 'https://pokedex-ecru-kappa.vercel.app/',
                alt: title,
            }
        ]
    }
}