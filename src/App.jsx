import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import JeuxPage from "./pages/JeuxPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<JeuxPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;