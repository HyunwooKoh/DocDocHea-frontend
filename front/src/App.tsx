import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../public/css/App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    </BrowserRouter>;
}

export default App;
