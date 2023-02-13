import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Beginner from "./components/pages/Beginner";
import Character from "./components/pages/Character";
import Dice from "./components/pages/Dice";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/character" element={<Character />} />
          <Route path="/dice" element={<Dice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
