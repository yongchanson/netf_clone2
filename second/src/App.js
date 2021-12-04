// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
