import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import JeuxPage from "./pages/JeuxPage.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route exact index element={<JeuxPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<JeuxPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;