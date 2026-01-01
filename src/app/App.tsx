import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Animations } from "./pages/Animations";
import { AnimationDetail } from "./pages/AnimationDetail";
import { Marketplace } from "./pages/Marketplace";
import { Dashboard } from "./pages/Dashboard";
import { CreatePost } from "./pages/CreatePost";
import { Courses } from "./pages/Courses";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animations" element={<Animations />} />
          <Route
            path="/animations/:id"
            element={<AnimationDetail />}
          />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<CreatePost />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}