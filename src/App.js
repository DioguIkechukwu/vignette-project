import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
