import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import LoginButton from "../components/LoginButton";

function Signup() {
  interface SignupForm {
    id: string;
    password: string;
    nickname: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  const submitRegister = (data: SignupForm) => {
    console.log(data);
  };
  return (
    <Container>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(submitRegister)}>
        <LongTextField
          required
          label="아이디"
          id="id"
          {...register("id", {
            required: "아이디를 입력해주세요.",
          })}
          placeholder="아이디를 입력해주세요."
        />
        <br />
        <br />
        <LongTextField
          required
          id="password"
          label="비밀번호"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        <br />
        <br />
        <LongTextField
          required
          id="nickname"
          label="닉네임"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
          })}
          placeholder="닉네임을 입력해주세요."
        />
        <br />
        <br />
      </form>
      <LoginButton
        type="submit"
        onClick={() => {
          window.location.replace("/signin");
        }}
      >
        회원가입
      </LoginButton>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  width: 100%;
  text-align: center;
  transform: translateY(40%);
`;

const LongTextField = styled(TextField)`
  width: 60%;
  margin-bottom: 20px;
  font-family: "Jua", sans-serif;
`;
