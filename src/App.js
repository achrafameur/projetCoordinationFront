import "./App.css";
import AddPost from "./components/AddPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PostDetails from "./components/PostDetails";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/post" element={<PostDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
