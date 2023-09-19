import React from "react";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import About from "./about/About";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;
