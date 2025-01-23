"use client"

import * as React from "react";
import * as Data from "../../../../public/data.json";
import {Temari, Value} from "@/types";

export function Game ({category}: {category: string}) {
    const [index, setIndex] = React.useState<number>(0)
    const categoryData= (Data as Temari)[category]
    const values = categoryData.values

    const handleNext = () => {
        if (index === values.length - 1) return
        setIndex(index + 1)
    }

    return (
        <div className="h-screen flex flex-col">

            <div className="flex flex-row justify-between p-4">
                <h2 className='text-xl font-bold'>{categoryData.name}</h2>
                <a href={'/'} className="rounded-md border border-solid p-2">Tornar Enrerra</a>
            </div>
            <Card value={values[index]}/>
            <button
                className='bg-gray-500 text-white h-24'
                onClick={handleNext}>
                Seguent
            </button>
        </div>
    )
}
function Card ({value}: {value: Value}) {
    const [toggle, setToggle]= React.useState<boolean>(true)
    React.useEffect(() => {
        setToggle(true)
    }, [value])
    return (
        <button
        className="w-full h-full"
        onClick={() => setToggle(!toggle)}>
            <h2 className='text-5xl font-bold'>{toggle ? value.jap : value.cat}</h2>
        </button>
    )
}