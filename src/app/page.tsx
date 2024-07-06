"use client";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/common/header/Header"));
const About = dynamic(() => import("@/components/about/About"));
const Skill = dynamic(() => import("@/components/skill/Skill"));
const Experience = dynamic(() => import("@/components/experience/Experience"));
const Projects = dynamic(() => import("@/components/projects/Projects"));
const Contact = dynamic(() => import("@/components/contact/Contact"));
const Footer = dynamic(() => import("@/components/common/footer/Footer"));

export default function Home() {
  return (
    <main className="px-4 lg:px-0">
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
