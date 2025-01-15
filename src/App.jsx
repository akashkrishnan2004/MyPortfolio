import "./App.css";

import { Toaster } from "react-hot-toast";

import NavbarSection from "../components/navBarSection";
import HomeSection from "../components/homeSection";
import AboutSection from "../components/aboutSection";
import ProjectSection from "../components/projectSection";
import SkillsSection from "../components/skillSection";
import ContactSection from "../components/contactSection";
import FooterSection from "../components/footerSection";
import FluidCursor from "../components/cursor";

function App() {
  return (
    <div>
      <Toaster />
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
      <FluidCursor />
    </div>
  );
}

export default App;
