import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RessetPasword from "../pages/ressetpasword";
import Forgot from "../pages/forgot";
import Room from "../pages/room";
import Register from "../pages/register";
import Home from "../pages/home";
import About from "../pages/about";
import ProtectedRoute from "../components/ProtectedRoute";
import EditProfile from "../pages/editprofile";
import DeleteAccount from "../pages/deleteaccount";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/ressetpasword" element={<RessetPasword />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/room" element={<Room />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/deleteaccount" element={<ProtectedRoute><DeleteAccount /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
