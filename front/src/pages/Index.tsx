import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../components/TopNavbar";
import styled from "styled-components";

function Index() {
  return (
    <div>
      <TopNavbar />
      <View>
        <p style={{ fontSize: 40, fontWeight: 800 }}>귀찮은 이력서, 문서처리</p>
        <p style={{ fontSize: 60, fontWeight: 800 }}>DocDocHae에서 간편하게 해결하세요!</p>
        <p style={{ fontSize: 20 }}>간편하게 문서를 올리면, 문서 OCR을 통해 문서의 내용을 한눈에 확인할 수 있어요.</p>
      </View>
    </div>
  );
}

export default Index;

const View = styled.div`
  width: 100%;
  height: 92.2vh;
  border: 1px solid black;
  text-align: center;
  color: var(--bs-dark-rgb);
  padding-top: 200px;
`;
