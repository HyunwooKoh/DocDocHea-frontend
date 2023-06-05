import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useNavbarStatus from "../stores/useNavbarStatus";

function TopNavbar() {
  const { selectedMenu, setSelectedMenu } = useNavbarStatus();

  function topStatus(status: number) {
    if (status == 0) {
      return (
        <>
          <Nav.Link href="/registDoc" onClick={() => setSelectedMenu(1)}>
            문서 등록하기
          </Nav.Link>
          <Nav.Link href="/viewDoc" onClick={() => setSelectedMenu(2)}>
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
          <Nav.Link href="/viewDoc" onClick={() => setSelectedMenu(2)}>
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
          <Nav.Link style={{ color: "white" }} href="/viewDoc" onClick={() => setSelectedMenu(2)}>
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
          {sessionStorage.getItem("isLogin") == "true" ? (
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
