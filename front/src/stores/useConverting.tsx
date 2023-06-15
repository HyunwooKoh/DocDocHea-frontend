import { create } from "zustand";
import useModal from "./useModal";
import api from "../api/api";

let uuid = "";
let process_status = "";
interface Converting {
  convertStatus: number | null;
  setConvert: (file: File, fType: string) => void;
  isConverting: boolean;
  convertUuid: string | null;
  isError: boolean;
  resultData: any;
  imgUrl: File | null;
  reqType: string;
}

const useConverting = create<Converting>(set => ({
  convertStatus: 0,
  isConverting: false,
  isError: false,
  convertUuid: null,
  resultData: "",
  imgUrl: null,
  reqType: "",
  setConvert: async (file: File, fType: string) => {
    set({ reqType: fType });
    set({ isConverting: true });
    const formData = new FormData();
    formData.append("files", file);
    formData.append("reqType", fType);
    await api
      .post("/job/extract", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        console.log(res.data);
        set({ convertUuid: res.data.uuids[0] });
        uuid = res.data.uuids[0];
        set({ isConverting: true });
        set({ convertStatus: 1 });
      });
    do {
      await api
        .get(`/job/status/${uuid}`)
        .then(res => {
          console.log(res);
          process_status = res.data.status;
        })
        .catch(err => console.log(err));
    } while (process_status == "Processing");
    await api.get(`/job/result/${uuid}`).then(res => {
      console.log(res);
      api.get(`${res.data.imageUrl}`).then(res => {
        console.log(res);
        set({ imgUrl: res.data });
      });
      set({ resultData: res.data.resData.map });
    });

    set({ isConverting: false });
  },
}));

export default useConverting;
