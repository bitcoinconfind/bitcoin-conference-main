import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Index from "./pages/Index";
import ApplySponsor from "./pages/ApplySponsor";
import ApplySpeaker from "./pages/ApplySpeaker";
import Contact from "./pages/Contact";
import ContactStudentVolunteer from "./pages/ContactStudentVolunteer";
import ContactMediaPartnership from "./pages/ContactMediaPartnership";
import ContactGeneral from "./pages/ContactGeneral";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="apply/speaker" element={<ApplySpeaker />} />
            <Route path="apply/sponsor" element={<ApplySponsor />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/general" element={<ContactGeneral />} />
            <Route path="contact/student-volunteer" element={<ContactStudentVolunteer />} />
            <Route path="contact/media-partnership" element={<ContactMediaPartnership />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
