import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 1,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  totalLevels: 42,
  avatar: "https://i.imgur.com/PjqWEth.png",
  name: "John Doe",
  pinnedTheory: ["Arrays", "Methods", "Variables", "For-loop", "If-loop"],

  addPinned: (newPinned) => {
    set((state) => {
      return { pinnedTheory: [...state.pinnedTheory, newPinned] };
    });
  },
  removePinned: (removePinned) => {
    console.log("removePinned", removePinned);
    set((state) => {
      return {
        pinnedTheory: state.pinnedTheory.filter(
          (item) => item !== removePinned
        ),
      };
    });
  },

  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
}));

export default useLevelStore;
