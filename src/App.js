import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-screen min-h-screen font-inter bg-richblack-900 overflow-x-hidden">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
