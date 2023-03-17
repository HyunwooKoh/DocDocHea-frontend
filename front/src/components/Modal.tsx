import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../assets/css/modal.module.css";
import useModal from "../stores/useModal";

function Modal() {
  const [docsType, setDocsType] = useState<number>(0);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { modalStatus, modalClose } = useModal();
  function getDocsType(docsType: number) {
    if (docsType == 0) {
      return "이력서";
    } else if (docsType == 1) {
      return "정부 문서";
    } else {
      return "차량 번호판";
    }
  }
  interface FInfo {
    name: string | null;
    fileType: string | null;
    transStatus: string | null;
  }
  const [fileInfo, setFileInfo] = useState<FInfo[]>([]);
  function getFileName() {
    const fileName = fileRef!.current!.files![0].name;
    const newObj: FInfo = {
      name: fileName,
      fileType: getDocsType(docsType),
      transStatus: "변환 전",
    };
    setFileInfo(prevFile => [...prevFile, newObj]);
  }
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <Stack direction="row" spacing={2} style={{ alignItems: "baseline" }}>
          <p>문서 타입</p>
          <Button onClick={() => setDocsType(0)} variant={docsType == 0 ? "contained" : "outlined"}>
            이력서
          </Button>
          <Button onClick={() => setDocsType(1)} variant={docsType == 1 ? "contained" : "outlined"}>
            정부 문서
          </Button>
          <Button onClick={() => setDocsType(2)} variant={docsType == 2 ? "contained" : "outlined"}>
            차량 번호판
          </Button>
          <i className="xi-close xi-2x" style={{ position: "absolute", right: "30px", cursor: "pointer" }} onClick={() => modalClose()}></i>
        </Stack>
        <Stack direction="row" spacing={2} style={{ alignItems: "baseline" }}>
          <p>문서 선택</p>
          <input id="fileInput" type="file" onChange={() => getFileName()} ref={fileRef} multiple />
        </Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>파일명</TableCell>
                <TableCell>파일 타입</TableCell>
                <TableCell>변환 상태</TableCell>
                <TableCell>변환하기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tableBody">
              {fileInfo &&
                fileInfo.map(newObj => {
                  return (
                    <TableRow key={newObj.name}>
                      <TableCell>{newObj.name}</TableCell>
                      <TableCell>{newObj.fileType}</TableCell>
                      <TableCell>{newObj.transStatus}</TableCell>
                      <TableCell>
                        <Button variant="contained">변환</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Modal;

const ResultDiv = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-color: #ffe0bf;
`;
