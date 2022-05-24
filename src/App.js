import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./theme/global.css";
import ScrollToTop from "./component/ScrollToTop";
import Header from "./component/Header/header";
import HomePage from "./page/Home/HomePage";
import About from "./page/About";
import Footer from "./component/Footer/footer";
import BackSection from "./page/WorkOut/BackSection";
import LegSection from "./page/WorkOut/LegSection";
import StomachSection from "./page/WorkOut/StomachSection";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/workout/back" element={<BackSection />} />
        <Route path="/workout/legs" element={<LegSection />} />
        <Route path="/workout/stomach" element={<StomachSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
