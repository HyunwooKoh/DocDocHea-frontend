import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useNavbarStatus from "../stores/useNavbarStatus";

function TopNavbar() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { selectedMenu, setSelectedMenu } = useNavbarStatus();

  console.log(selectedMenu);

  function topStatus(status: number) {
    if (status == 0) {
      return (
        <>
          <Nav.Link href="/registDoc" onClick={() => setSelectedMenu(1)}>
            문서 등록하기
          </Nav.Link>
          <Nav.Link href="#features" onClick={() => setSelectedMenu(2)}>
            문서 조회하기
          </Nav.Link>
        </>
      );
    } else if (status == 1) {
      return (
        <>
          <Nav.Link style={{ color: "white" }} href="/registDoc" onClick={() => setSelectedMenu(1)}>
            문서 등록하기
          </Nav.Link>
          <Nav.Link href="#features" onClick={() => setSelectedMenu(2)}>
            문서 조회하기
          </Nav.Link>
        </>
      );
    } else if (status == 2) {
      return (
        <>
          <Nav.Link href="/registDoc" onClick={() => setSelectedMenu(1)}>
            문서 등록하기
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#features" onClick={() => setSelectedMenu(2)}>
            문서 조회하기
          </Nav.Link>
        </>
      );
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" onClick={() => setSelectedMenu(0)}>
            <strong>DDH</strong>
          </Navbar.Brand>
          <Nav className="me-auto">{topStatus(Number(sessionStorage.getItem("navStatus")))}</Nav>
          {isLogin ? (
            <Nav>
              <Navbar.Text style={{ color: "white" }}>이승현님, 환영합니다</Navbar.Text>
              <Nav.Link href="#home">로그아웃</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/signin">로그인</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
