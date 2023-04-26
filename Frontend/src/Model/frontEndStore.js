import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 25,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  totalLevels: 42,
  avatar: "https://i.imgur.com/PjqWEth.png",
  name: "John Doe",

  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
