import { useState } from "react"

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    // Buscar que es un hook
    return(
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
                {/* <li>ABC</li> */}
            </ol>
                {/* Gif Item */}
        </>
    )
}