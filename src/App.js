import React from "react";
import "../src/App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
