import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Timeline from "@/components/Timeline";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
          <Footer />
        </main>
        <Sidebar />
      </div>
      <Terminal />
    </>
  );
}
