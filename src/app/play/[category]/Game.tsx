"use client"

import * as React from "react";
import {Value} from "@/types";

export function Game ({category, values}: {category: string, values: Value[]}) {
    const [index, setIndex] = React.useState<number>(0)

    const handleNext = () => {
        if (index === values.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div className="h-screen flex flex-col">

            <div className="flex flex-row justify-between p-4">
                <h2 className='text-xl font-bold'>{category}</h2>
                <a href={'/'} className="rounded-md border border-solid p-2">Tornar Enrerra</a>
            </div>
            <Card value={values[index]}/>
            <button
                className='bg-gray-500 rounded-lg text-white h-24 m-24'
                onClick={handleNext}>
                SEGUENT
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