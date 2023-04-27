import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 29,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  totalLevels: 42,
  pinnedTheory: [],
  avatar: "https://i.imgur.com/PjqWEth.png",
  name: "John Doe",

  addFavorite: (newPinned) => {
    set((state) => {
      return { favorite: [...state.favorite, newPinned] };
    });
  },
  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
