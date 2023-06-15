import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import TopNavbar from "../components/TopNavbar";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import LoginButton from "../components/LoginButton";
import imagee from "../assets/img/diff.png";
import useModal from "../stores/useModal";
import Modal from "../components/Modal";
import useConverting from "../stores/useConverting";
import api from "../api/api";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modall from "@mui/material/Modal";

function RegistDocument() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { modalStatus, modalOpen, modalClose } = useModal();
  const { convertStatus, resultData, reqType, convertUuid, imgUrl } = useConverting();
  const prsInfo_outputType = ["korName", "engName", "studentID", "phone", "birth", "department", "beforeRevise", "afterRevise"];

  const resume_outputType = ["name", "gender", "birth", "address", "email", "phone", "univScore", "volunteerArea", "experienced"];

  const [prsInfo, setPrsInfo] = useState<any>({
    korName: "",
    engName: "",
    studentID: "",
    phone: "",
    birth: "",
    department: "",
    beforeRevise: "",
    afterRevise: "",
  });
  const [resumeInfo, setResumeInfo] = useState<any>({
    name: "",
    gender: "",
    birth: "",
    address: "",
    email: "",
    phone: "",
    univScore: "",
    volunteerArea: "",
    experienced: "",
  });

  useEffect(() => {
    console.log(resultData);
    if (reqType == "PrsInfo") {
      setPrsInfo((prev: any) => {
        return {
          ...prev,
          korName: resultData["korName"],
          engName: resultData["engName"],
          studentID: resultData["studentID"],
          phone: resultData["phone"],
          birth: resultData["birth"],
          department: resultData["department"],
          beforeRevise: resultData["beforeRevise"],
          afterRevise: resultData["afterRevise"],
        };
      });
    } else {
      setResumeInfo((prev: any) => {
        return {
          ...prev,
          name: resultData["name"],
          gender: resultData["gender"],
          birth: resultData["birth"],
          address: resultData["address"],
          email: resultData["email"],
          phone: resultData["phone"],
          univScore: resultData["univScore"],
          volunteerArea: resultData["volunteerArea"],
          experienced: resultData["experienced"],
        };
      });
    }
    // document.addEventListener("DOMContentLoaded", function () {
    //   const img = document.getElementById("convertImg") as HTMLImageElement;
    //   img.src = `../../../../../DocDocHea/home/${convertUuid}/diff.png`;
    // });
  }, [resultData]);

  const submit = () => {
    if (reqType == "PrsInfo") {
      console.log(prsInfo);
      api
        .post("/job/submit", {
          uuid: convertUuid,
          data: prsInfo,
        })
        .then(res => console.log(res));
    } else {
      console.log(resumeInfo);
      api
        .post("/job/submit", {
          uuid: convertUuid,
          data: resumeInfo,
        })
        .then(res => console.log(res));
    }
    handleOpen();
  };

  const changePrsValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => {
    const updatedValue = event.target.value;
    setPrsInfo((prev: any) => {
      return {
        ...prev,
        [value]: updatedValue,
      };
    });
  };

  const changeResumeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => {
    const updatedValue = event.target.value;
    setResumeInfo((prev: any) => {
      return {
        ...prev,
        [value]: updatedValue,
      };
    });
  };
  return (
    <>
      <TopNavbar />
      {modalStatus && <Modal />}
      <DocsInput>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => modalOpen()}>
          <i className="xi-folder-add-o" style={{ fontSize: 50 }} />
          <br />
          파일을 추가해주세요.
        </div>
      </DocsInput>
      <Alert variant="dark" style={{ width: "70%", margin: "0 auto", marginTop: 30, zIndex: -1 }}>
        <p>
          <i className="xi-warning"></i>이미지(.jpg .png) 및 PDF(.pdf)를 업로드 할 수 있습니다.
        </p>
        <p>
          <i className="xi-warning"></i>인식작업에 시간이 걸릴 수 있습니다. 창을 종료하지 마세요.
        </p>
      </Alert>
      <Modall open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center" }}>
            전송이 완료되었습니다.
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            style={{ width: "100%", marginTop: "20px" }}
            onClick={() => {
              document.location.reload();
            }}
          >
            확인
          </Button>
        </Box>
      </Modall>

      {convertStatus == 1 && (
        <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "50px auto" }}>
          <ResultBox style={{ width: "60%" }}>
            <img id="convertImg" src={imagee} style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
          </ResultBox>
          <ResultBox style={{ width: "35%", padding: "10px" }}>
            <ScrollBox>
              {reqType == "PrsInfo"
                ? prsInfo_outputType.map(value => {
                    return (
                      <KeyValueBox>
                        <TextField
                          style={{ width: "38%" }}
                          id="outlined-read-only-input"
                          label="key"
                          size="small"
                          defaultValue={value}
                          InputProps={{
                            readOnly: true,
                          }}
                          key={value}
                        />
                        <TextField
                          id="outlined-helperText"
                          className="inputField"
                          label="value"
                          size="small"
                          value={prsInfo[value]}
                          onChange={e => changePrsValue(e, value)}
                          key={prsInfo[value]}
                        />
                      </KeyValueBox>
                    );
                  })
                : resume_outputType.map(value => {
                    return (
                      <KeyValueBox>
                        <TextField
                          style={{ width: "38%" }}
                          id="outlined-read-only-input"
                          label="key"
                          size="small"
                          defaultValue={value}
                          InputProps={{
                            readOnly: true,
                          }}
                          key={value}
                        />
                        <TextField
                          id="outlined-helperText"
                          className="inputField"
                          label="value"
                          size="small"
                          value={resumeInfo[value]}
                          onChange={e => changeResumeValue(e, value)}
                          key={resumeInfo[value]}
                        />
                      </KeyValueBox>
                    );
                  })}
            </ScrollBox>
            <SendButton onClick={() => submit()}>전송하기</SendButton>
          </ResultBox>
        </div>
      )}
    </>
  );
}

export default RegistDocument;

const DocsInput = styled.div`
  width: 70%;
  height: 400px;
  border: 1px grey dashed;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultBox = styled.div`
  height: 650px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const KeyValueBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const SendButton = styled(LoginButton)`
  width: 100%;
  /* background-color: #808080;
  :hover {
    background-color: #949494;
  } */
  border: none;
`;

const ScrollBox = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
