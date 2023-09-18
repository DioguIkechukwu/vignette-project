import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

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
