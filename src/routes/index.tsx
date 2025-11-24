import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RessetPasword from "../pages/ressetpasword";
import Forgot from "../pages/forgot";
import Room from "../pages/room";
import Register from "../pages/register";
import Home from "../pages/home";
import About from "../pages/about";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/ressetpasword" element={<RessetPasword />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/room" element={<Room />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
