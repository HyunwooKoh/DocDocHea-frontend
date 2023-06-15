import { create } from "zustand";
import api from "../api/api";

interface AllData {
  prsResultData: any[];
  resumeResultData: any[];
  setPrsAllData: () => void;
  setResumeAllData: () => void;
}

const useAllData = create<AllData>(set => ({
  prsResultData: [],
  resumeResultData: [],
  setPrsAllData: async () => {
    await api.get("/data/prsInfo/all").then(res => {
      set({ prsResultData: res.data });
      console.log(res.data);
    });
  },
  setResumeAllData: async () => {
    await api.get("/data/resume/all").then(res => {
      set({ resumeResultData: res.data });
      console.log(res.data);
    });
  },
}));

export default useAllData;
