import { create } from "zustand";

type ToggleStore = {
  isMonthly: boolean;
  firstToggle: () => void;
};

export const useToggleStore = create<ToggleStore>((set) => ({
  isMonthly: true,
  firstToggle: () => {
    set((state) => ({ isMonthly: !state.isMonthly }));
  },
}));
