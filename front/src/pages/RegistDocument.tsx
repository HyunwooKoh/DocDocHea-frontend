import React, { useState } from "react";
import styled from "styled-components";
import TopNavbar from "../components/TopNavbar";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import LoginButton from "../components/LoginButton";
import imagee from "../assets/img/tempImage.png";
import useModal from "../stores/useModal";
import Modal from "../components/Modal";
function RegistDocument() {
  const { modalStatus, modalOpen, modalClose } = useModal();
  const dump = [
    {
      key: "키값1",
      value: "벨류값1",
    },
    {
      key: "키값2",
      value: "벨류값2",
    },
    {
      key: "키값3",
      value: "벨류값3",
    },
    {
      key: "키값4",
      value: "벨류값4",
    },
    {
      key: "키값5",
      value: "벨류값5",
    },
    {
      key: "키값6",
      value: "벨류값6",
    },
  ];
  return (
    <>
      <TopNavbar />
      <Modal />
      <DocsInput>
        <div style={{ textAlign: "center" }}>
          <i className="xi-folder-add-o" style={{ fontSize: 50 }} />
          <br />
          파일을 추가해주세요.
        </div>
      </DocsInput>
      <Alert variant="dark" style={{ width: "70%", margin: "0 auto", marginTop: 30 }}>
        <p>
          <i className="xi-warning"></i>이미지(.jpg .png) 및 PDF(.pdf)를 업로드 할 수 있습니다.
        </p>
        <p>
          <i className="xi-warning"></i>인식작업에 시간이 걸릴 수 있습니다. 창을 종료하지 마세요.
        </p>
      </Alert>
      <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "50px auto" }}>
        <ResultBox style={{ width: "60%" }}>
          <img src={imagee} style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
        </ResultBox>
        <ResultBox style={{ width: "35%", padding: "10px" }}>
          <ScrollBox>
            {dump.map(value => {
              return (
                <KeyValueBox>
                  <TextField
                    style={{ width: "38%" }}
                    id="outlined-read-only-input"
                    label="key"
                    size="small"
                    defaultValue={value.key}
                    InputProps={{
                      readOnly: true,
                    }}
                    key={value.key}
                  />
                  <TextField id="outlined-helperText" label="value" size="small" defaultValue={value.value} key={value.value} />
                </KeyValueBox>
              );
            })}
          </ScrollBox>
          <SendButton>전송하기</SendButton>
        </ResultBox>
      </div>
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
