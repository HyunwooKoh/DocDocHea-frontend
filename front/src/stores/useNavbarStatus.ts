import { create } from "zustand";

interface Status {
  selectedMenu: number;
  setSelectedMenu: (data: number) => void;
}

const useNavbarStatus = create<Status>(set => ({
  selectedMenu: 0,
  setSelectedMenu: data => {
    set({ selectedMenu: data });
    sessionStorage.setItem("navStatus", data.toString());
  },
}));

export default useNavbarStatus;
