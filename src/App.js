import React from "react";
import "react-calendar-heatmap/dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
