import "./App.css";
import AddPost from "./components/AddPost";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
