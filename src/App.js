import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/Components/HomePage/HomePage";
import Cart from "../src/Components/Cart/Cart";
import Navbar from "../src/Components/Navbar/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
