import StarfieldBg from "@/components/ui/StarfieldBg";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Lately from "@/components/sections/Lately";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StarfieldBg />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <Skills />
        <Experience />
        <Lately />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
