import { create } from "zustand";
import decode from "../decode_token";

//SELECT IP FOR SERVER HERE
export const IP="http://130.229.157.25:3003"

const useLevelStore = create((set) => ({
  currentLevel: 1,
  levelsLab1: 14,
  levelsLab2: 14,
  levelsLab3: 14,
  totalLevels: 42,
  email: "",
  pinnedTheory: [],
  name: "",
  avatar: "https://i.imgur.com/PjqWEth.png",

  setName: (name) => {
    set(() => ({
      name: name,
    }));
  },
  setLevel: (cLevel) => {
    set(() => ({ currentLevel: cLevel }));
  },
  setPinned: (pinned) => {
    set(() => ({ pinnedTheory: pinned }));
  },

  setProfilePic: (profileP) => {
    set((state) => {
      const res = fetch(IP + "/authentication/editProfilePicture", {
        method: "GET",
        headers: {
          id: decode(localStorage.token).user.id,
          token: localStorage.token,
          new_pic: profileP,
        },
      });
      return { profilePic: profileP };
    });
  },
  setID: (id) => set(() => ({ id: id })),
  addPinned: (newPinned) => {
    set((state) => {
      const res = fetch(IP + "/authentication/pinnedItems", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          id: decode(localStorage.token).user.id,
          token: localStorage.token,
        },
        body: JSON.stringify({
          newPinned: newPinned,
        }),
      });
      console.log(
        JSON.stringify({
          newPinned: newPinned,
        })
      );
      return { pinnedTheory: [...state.pinnedTheory, newPinned] };
    });
  },
  incrementLevel: () => {
    set((state) => {
      const res = fetch(IP + "/authentication/levelUp", {
        method: "GET",
        headers: {
          id: decode(localStorage.token).user.id,
          token: localStorage.token,
        },
      });
      return { currentLevel: state.currentLevel + 1 };
    });
  },
  removePinned: (removePinned) => {
    console.log("removePinned", removePinned);
    set((state) => {
      const res = fetch(IP + "/authentication/removePinnedItems", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          id: decode(localStorage.token).user.id,
          token: localStorage.token,
        },
        body: JSON.stringify({
          removePinned: removePinned,
        }),
      });
      return {
        pinnedTheory: state.pinnedTheory.filter(
          (item) => item !== removePinned
        ),
      };
    });
  },
}));

export default useLevelStore;
