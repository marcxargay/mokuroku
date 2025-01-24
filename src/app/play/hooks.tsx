import {useGameStore} from "@/app/store";
import allData from '@/../public/data.json'
import { Value} from "@/types";

export const useValues = () => {
    const {selectedCategories} = useGameStore()

    const values = Object.entries(allData)
        .filter(([key]) => selectedCategories.includes(key))
        .flatMap(([_, value]) => value.values)

    return {
        values
    }
}