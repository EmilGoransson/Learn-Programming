import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 40,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
