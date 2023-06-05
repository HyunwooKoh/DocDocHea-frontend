import React, { useState, useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useAllData from "../stores/useAllData";

const prsInfo_outputType = ["korName", "engName", "studentID", "phone", "birth", "department", "beforeRevise", "afterRevise"];

const resume_outputType = ["name", "gender", "birth", "address", "email", "phone", "univScore", "volunteerArea", "experienced"];

const tempData = [
  {
    key: "experience",
    value: "신임",
  },
  { key: "univScore", value: 4.5 },
  { key: "name", value: "고현우" },
  { key: "gender", value: "남자" },
  { key: "volunteerArea", value: "R&D 본부" },
  { key: "birth", value: "1998년 09월 19일" },
  { key: "address", value: "경기도 용인시 수지구" },
  { key: "phone", value: "010-2321-3290" },
  { key: "email", value: "32170171@dankook.ac" },
];

function ViewDocument() {
  const { prsResultData, resumeResultData, setPrsAllData, setResumeAllData } = useAllData();
  const [docType, setDocType] = useState<string>("이력서");
  const handleChange = (event: SelectChangeEvent) => {
    setDocType(event.target.value);
  };

  useEffect(() => {
    setPrsAllData();
    setResumeAllData();
  }, []);

  return (
    <div>
      <TopNavbar />
      <div style={{ marginTop: "2em" }}>
        <h3 style={{ marginLeft: "10%" }}>제정정원</h3>
        <TableContainer style={{ maxWidth: "80%", margin: "0 auto" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {prsInfo_outputType.map(dt => {
                  return <TableCell style={{ textAlign: "center" }}>{dt}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody id="tableBody">
              {prsResultData.map(data => {
                return (
                  <TableRow key={data}>
                    <TableCell style={{ textAlign: "center" }}>{data.korName}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.engName}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.studentID}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.phone}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.birth}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.department}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.beforeRevise}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.afterRevise}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <h3 style={{ marginLeft: "10%", marginTop: "5%" }}>이력서</h3>
        <TableContainer style={{ maxWidth: "80%", margin: "0 auto", marginBottom: "10%" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {resume_outputType.map(dt => {
                  return <TableCell style={{ textAlign: "center" }}>{dt}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody id="tableBody">
              {resumeResultData.map(data => {
                console.log(data);
                return (
                  <TableRow key={data}>
                    <TableCell style={{ textAlign: "center" }}>{data.name}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.gender}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.birth}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.address}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.email}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.phone}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.univScore}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.volunteerArea}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{data.experienced}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewDocument;
