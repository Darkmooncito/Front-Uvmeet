import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RessetPasword from "../pages/ressetpasword";
import Forgot from "../pages/forgot";
import Register from "../pages/register";
import Home from "../pages/home";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ressetpasword" element={<RessetPasword />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
