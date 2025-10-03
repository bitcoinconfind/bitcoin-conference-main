import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Index from "./pages/Index";
import ApplySponsor from "./pages/ApplySponsor";
import ApplySpeaker from "./pages/ApplySpeaker";
import Contact from "./pages/Contact";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
