// import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { CssBaseline } from "@mui/material";
import "./App.css";

function App() {


  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
