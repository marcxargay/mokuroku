import {useGameStore} from "@/app/store";
import allData from '@/../public/data.json'

export const useValues = () => {
    const {selectedCategories} = useGameStore()

    const values = Object.entries(allData)
        .filter(([key]) => selectedCategories.includes(key))
        .flatMap(([, value]) => value.values)

    return {
        values
    }
}