import { create } from "zustand";

const useLevelStore = create((set) => ({
  currentLevel: 1,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,

  name: "John Doe",
  setName: (name) => { 
    set(() => ({
      name: name,
    }));
  },
  setLevel: (cLevel) => { 
    set(() => ({currentLevel: cLevel}))
    },
  setID: (id) => (
    set(() => ({id: id}))
  ),
  totalLevels: 42,
  avatar: "https://i.imgur.com/PjqWEth.png",
  email: "johndoe@kth.se",
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
