import {create} from 'zustand'

interface GameStore {
    selectedCategories: string[];
    random: boolean;
    setSelectedCategories: (categories: string[]) => void;
    setRandom: (random: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
    selectedCategories: [],
    random: false,
    setSelectedCategories: (categories) => set({ selectedCategories: categories}),
    setRandom: (random) => set({random})
}))
