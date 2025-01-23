
import * as React from 'react'
import {Game} from "@/app/play/[category]/Game";
import allData from '../../../../public/data.json'
import {Category, Temari, Value} from "@/types";

export default async function CategoryPage ({params}: { params: Promise<{ category: string }> }) {
    const param = (await params).category
    let values: Value[] = []
    let name: string

    if (param == 'all') {
        name = "Tots"
        Object.values(allData).forEach((value:Category) => {
            values.push(...value.values)
        })
    } else {
        const category = (allData as Temari)[param]
        name = category.name
        values = category.values
    }

    return (
        <Game category={name} values={values}/>
    )
}

