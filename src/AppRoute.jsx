// import Navbar from "./Components/NavBar";
// import Home from "./pages/Home";
// import About from "./Components/About";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Education from "./pages/Education";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";

// export default function AppRoute() {
//   return (
//     <>
//       <Navbar />

//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </>
//   );
// }


import Navbar from "./Components/NavBar";
import Hero from "./pages/Hero"
import About from "./pages/About"
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Education />
        <Contact />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;