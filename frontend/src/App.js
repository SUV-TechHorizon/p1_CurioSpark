import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import Courses from "./Components/pages/Courses";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Navbar onSectionChange={handleSectionChange} />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/courses" element={<Body activeSection='courses' />}></Route>
        <Route path="/about" element={<Body activeSection='about' />}></Route>
        <Route path="/blog" element={<Body activeSection='blog' />}></Route>
        <Route path="/testimonials" element={<Body activeSection='testimonials' />}></Route>
        <Route path="/contact" element={<Body activeSection='contact' />}></Route>
        <Route path="/courses/content" element={<Courses />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
