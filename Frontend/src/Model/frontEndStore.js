import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 1,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,

  getName: (userName) => (
    set(() => ({userName: userName}))
  ),
  getLevel: (cLevel) => (
    set(() => ({currentLevel: cLevel}))
  ),
  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
