import About from "@/components/about/About";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <main className="">
      {/* header */}
      <Header />
      {/* about */}
      <About />
      {/* skills */}
      <Skill />
      {/* experience */}
      <Experience />
      {/* project */}
      <Projects />
      {/* get in touch */}
      <Contact />
      {/* footer */}
      <Footer />
    </main>
  );
}
