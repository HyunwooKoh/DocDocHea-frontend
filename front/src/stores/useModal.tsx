import { create } from "zustand";

interface Modal {
  modalStatus: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

const useModal = create<Modal>(set => ({
  modalStatus: false,
  modalOpen: () => {
    set({ modalStatus: true });
  },
  modalClose: () => {
    set({ modalStatus: false });
  },
}));

export default useModal;
