import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./container/Navbar";
import Home from "./container/Home";
import Chapters from "./container/Chapters";
import Chapter from "./container/Chapter";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chapters" element={<Chapters/>}/>
          <Route path="/chapter/:flag" element={<Chapter/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
