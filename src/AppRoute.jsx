import Navbar from "./Components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          {/* <Experience /> */}
          <Contact />
        </main>

        {/* <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main> */}

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
