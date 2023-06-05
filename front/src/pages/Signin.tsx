import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import NonStyleP from "../components/NonStyleP";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";

const Container = styled.div`
  width: 100%;
  text-align: center;
  transform: translateY(50%);
`;

const LongTextField = styled(TextField)`
  width: 60%;
  margin-bottom: 20px;
  font-family: "Jua", sans-serif;
`;

function Signin() {
  sessionStorage.setItem("isLogin", "false");

  interface LoginForm {
    id: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const submitLogin = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <Container>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(submitLogin)}>
        <LongTextField
          required
          id="outlined-required"
          label="아이디"
          {...register("id", {
            required: "아이디를 입력해주세요.",
          })}
          placeholder="아이디를 입력해주세요."
        />
        <br />
        <br />
        <LongTextField
          required
          id="outlined-required"
          label="비밀번호"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        <br />
        <br />
      </form>
      <LoginButton
        onClick={() => {
          sessionStorage.setItem("isLogin", "true");
          window.location.replace("/");
        }}
      >
        로그인
      </LoginButton>
      <p>
        아직 계정이 없다면?&nbsp;
        <Link to="/signup" style={{ textDecoration: "none" }}>
          회원가입
        </Link>
      </p>
    </Container>
  );
}

export default Signin;
