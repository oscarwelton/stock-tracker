// import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ViewPage from "./pages/ViewPage.jsx";
import { CssBaseline } from "@mui/material";

import './sass/index.scss';


function App() {

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/:symbol" element={<ViewPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
