
import * as React from 'react'
import {Game} from "@/app/play/[category]/Game";


export default async function CategoryPage ({params}: { params: Promise<{ category: string }> }) {
    const category = (await params).category

    return (
        <>
            <Game category={category}/>
        </>
    )
}

