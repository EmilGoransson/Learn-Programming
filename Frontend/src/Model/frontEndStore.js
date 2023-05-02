import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 29,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  totalLevels: 42,
  avatar: "https://i.imgur.com/PjqWEth.png",
  name: "John Doe",
  email: "johndoe@kth.se",
  pinnedTheory: ["Arrays", "Methods", "Variables", "For-loop", "If-loop"],

  addPinned: (newPinned) => {
    set((state) => {
      return { favorite: [...state.favorite, newPinned] };
    });
  },
  removePinned: (removePinned) => {
    set((state) => {
      return {
        favorite: state.pinnedTheory.filter((item) => item !== removePinned),
      };
    });
  },

  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
