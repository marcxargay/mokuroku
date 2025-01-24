'use client'
import * as React from 'react'

import Data from "../../public/data.json"
import {Temari} from "@/types";
import {useGameStore} from "@/app/store";
import Link from "next/link";

export default function Home() {
    const allData: Temari = Data
    const [allChecked, setAllChecked] = React.useState<boolean>(false)
    const {setRandom, random, setSelectedCategories, selectedCategories} = useGameStore()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, e.target.value])
        } else {
            setSelectedCategories(selectedCategories.filter((value) => value !== e.target.value))
            setAllChecked(false)
        }
    }

    const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedCategories(Object.keys(allData))
            setAllChecked(true)
        } else {
            setAllChecked(false)
        }
    }

    const handleRandom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRandom(e.target.checked)
    }

    React.useEffect(() => {
        console.log(selectedCategories)
    }, [selectedCategories])

    return (
        <div className="flex flex-col gap-4 p-12">
            {
                Object.entries(allData).map(([key, value]) => (<div key={`parent${key}`}>
                        <input type="checkbox" key={`checkbox${key}`}
                               value={key}
                               id={key}
                               name={key}
                               onChange={handleOnChange}
                               checked={selectedCategories.includes(key) || allChecked}
                        />
                        <label htmlFor={key} key={`label${key}`}>{value.name}</label>
                    </div>)
                )
            }
            <div>
                <input type="checkbox"
                       value='all'
                       id='all'
                       name='all'
                       onChange={handleCheckAll}
                       checked={allChecked}
                />
                <label htmlFor='all' key='all'>Selecciona tot el temari</label>
            </div>
            <div>
                <input type="checkbox"
                       value='random'
                       id='random'
                       name='random'
                       onChange={handleRandom}
                       checked={random}
                />
                <label htmlFor='all' key='all'>Aleatori</label>
            </div>
            <Link href={'/play'} style={{pointerEvents: selectedCategories.length ? 'inherit' : 'none'}}>Play</Link>
        </div>
    );
}
