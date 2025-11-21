import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RessetPasword from "../pages/ressetpasword";
import Forgot from "../pages/forgot";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ressetpasword" element={<RessetPasword />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}
