import { create } from "zustand";
import decode from "../decode_token";

const useLevelStore = create((set) => ({
  currentLevel: 1,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,

  name: "John Doe",
  avatar: "https://i.imgur.com/PjqWEth.png",
  setName: (name) => {
    set(() => ({
      name: name,
    }));
  },
  setLevel: (cLevel) => {
    set(() => ({currentLevel: cLevel}));
  },
  setProfilePic: (profileP) => {
    set(() => ({ avatar: profileP }));
  },
  setID: (id) => set(() => ({ id: id })),
  totalLevels: 42,
  email: "johndoe@kth.se",
  pinnedTheory: ["Arrays", "Methods", "Variables", "For-loop", "If-loop"],

  addPinned: (newPinned) => {
    set((state) => {
      return {pinnedTheory: [...state.pinnedTheory, newPinned]};
    });
  },
  incrementLevel: () => {
    set((state) => {
      const res = fetch("http://130.229.172.67:3003/authentication/levelUp", {
        method: "GET",
        headers: {
          id: decode(localStorage.token).user.id,
          token: localStorage.token,
        }
      });
      return {currentLevel: state.currentLevel + 1};

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
}));

export default useLevelStore;
