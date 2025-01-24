'use client'
import * as React from 'react'

import Data from "../../public/data.json"
import {Temari} from "@/types";

export default function Home() {
    const [selected, setSelected] = React.useState<string[]>([])
    const [allChecked, setAllChecked] = React.useState<boolean>(false)

    const allData: Temari = Data

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelected([...selected, e.target.value])
        } else {
            setSelected(selected.filter((value) => value !== e.target.value))
            setAllChecked(false)
        }
    }

    const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelected(Object.keys(allData))
            setAllChecked(true)
        } else {
            setAllChecked(false)
        }
    }

    return (
        <div className="flex flex-col gap-4 p-12">
            {
                Object.entries(allData).map(([key, value]) => (<div>
                        <input type="checkbox" key={`checkbox${key}`}
                               value={key}
                               id={key}
                               name={key}
                               onChange={handleOnChange}
                               checked={selected.includes(key) || allChecked}
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
            <a>Play</a>
        </div>
    );
}
